import React from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  makeStyles,
  Theme,
  IconButton,
  CircularProgress
} from "@material-ui/core";
import Storage from "@aws-amplify/storage";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useUser, useAuth } from "../auth/AuthenticationProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoginOpen,
  setEditorOpen,
  setVisualisation
} from "../common/appState";
import { useSnackbar } from "notistack";
import CloseIcon from "@material-ui/icons/CloseRounded";
import uuid from "uuid/v4";
import slugify from "slugify";
import config from "../aws-exports";

import KeplerGlSchema from "kepler.gl/schemas";
import { cleanupExportImage } from "kepler.gl/actions";
import { RootState } from "../Store";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
  CreateVisualisationMutationVariables,
  CreateConfigMutationVariables,
  CreateDatasetMutationVariables
} from "../API";
import { useHistory } from "react-router-dom";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config;

const useStyles = makeStyles((theme: Theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

/**
 * This file contains:
 * - Formik code
 *  - get config/datasets to save
 *  - put storage items
 *  - create visualisation mutation
 *  - create config mutations
 *  - create datasets mutations
 * - Panel header form
 * - Dialog with full form
 * - Mutation tags
 * - mutation result types
 */

export const DetailsForm = () => {
  const user = useUser();
  const auth = useAuth();

  const dispatch = useDispatch();
  // @ts-ignore
  const { editorDialogOpen } = useSelector<RootState>(s => s.app);

  // @ts-ignore
  const { exportImage } = useSelector(s => s.keplerGl.editor.uiState);

  const { enqueueSnackbar } = useSnackbar();
  const handleSimpleFormSubmit = (e: any) => {
    e.preventDefault();
    if (user) {
      dispatch(setEditorOpen(true));
      return;
    }

    enqueueSnackbar("You've must be logged in to save a visualisation");
    dispatch(setLoginOpen(true));
  };

  // @ts-ignore
  const keplerState = useSelector<RootState>(s => s.keplerGl.editor);

  // get mutation operations
  const [createVisualisation] = useMutation<
    CreateVisualisationResult,
    CreateVisualisationMutationVariables
  >(createVisualisationTag);

  const [createConfig] = useMutation<
    CreateConfigResult,
    CreateConfigMutationVariables
  >(createConfigTag);
  const [createDataset] = useMutation<
    CreateDatasetResult,
    CreateDatasetMutationVariables
  >(createDatasetTag);

  // for success
  const classes = useStyles();
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        name: "Test",
        description: "description",
        isPublic: true,
        password: ""
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string(),
        isPublic: Yup.boolean(),
        password: Yup.string()
      })}
      onSubmit={async ({ name, description, isPublic }, { setSubmitting }) => {
        try {
          setSubmitting(true);
          console.log(exportImage);

          const dataToSave = KeplerGlSchema.getDatasetToSave(keplerState);
          const configToSave = KeplerGlSchema.getConfigToSave(keplerState);

          // push all the files to amplify
          const [image, config, ...datasets] = await Promise.all([
            Storage.put(
              `images/${slugify(name, {
                lower: true
              })}-thumbnail-${uuid()}.png`,
              new Blob([exportImage.imageDataUri], {
                type: "image/png"
              }),
              {
                level: "protected",
                contentType: "image/png"
              }
            ),
            Storage.put(
              `configs/${slugify(name, {
                lower: true
              })}-config-${uuid()}.json`,
              new Blob([JSON.stringify(configToSave)]),
              {
                level: "protected"
              }
            ),
            ...dataToSave.map((dataset: any) =>
              Storage.put(
                `datasets/${dataset.data.label}-kepler-dataset-${uuid()}.json`,
                new Blob([JSON.stringify(dataset)]),
                {
                  level: "protected"
                  // contentType: "application/json"/
                }
              )
            )
          ]);

          // we get the identityId because S3 uses this in the upload prefix. So bizzare.
          // https://github.com/aws-amplify/amplify-js/issues/1787
          // https://github.com/aws-amplify/amplify-js/issues/54
          // https://stackoverflow.com/questions/42386180/aws-lambda-api-gateway-with-cognito-how-to-use-identityid-to-access-and-update
          const { identityId } = await auth.currentUserCredentials();

          // then we create the config and pass in the vis ID
          // const createConfigMutation =
          const configResult = await createConfig({
            variables: {
              input: {
                file: { ...config, region, bucket, identityId }
              }
            }
          });

          // first we create the visualisation
          const visualisationResult = await createVisualisation({
            variables: {
              input: {
                title: name,
                description,
                image: { ...image, region, bucket, identityId },
                visualisationConfigId: configResult.data?.createConfig?.id,
                // @ts-ignore
                visualisationUserId: user?.attributes?.sub
              }
            }
          });

          // then we create the datasets and pass in the vis ID
          // const datasetsMutations =
          await Promise.all(
            datasets.map((s3Object, index) =>
              createDataset({
                variables: {
                  input: {
                    datasetVisualisationId:
                      visualisationResult.data?.createVisualisation.id,
                    title: dataToSave[index].data.label,
                    file: { ...s3Object, region, bucket, identityId }
                  }
                }
              })
            )
          );

          // and when all the promises are resolved
          // this could be done in parallel.
          // const [configResult, ...datasetsResults] = await Promise.all([
          //   createConfigMutation, ...datasetsMutations
          // ]);

          // Then we're done!
          dispatch(
            setVisualisation(visualisationResult?.data?.createVisualisation)
          );
          dispatch(cleanupExportImage());
          enqueueSnackbar("Visualisation saved!", { variant: "success" });
          history.push(
            `/v/${visualisationResult.data?.createVisualisation.id}/share`,
            { data: dataToSave, config: configToSave }
          );
        } catch (error) {
          console.log("error creating vis", error);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting
      }) => (
        <>
          <NoBoxSizing>
            <form onSubmit={handleSimpleFormSubmit}>
              <Box display="flex" p={2} bgcolor="background.default">
                <Box flexGrow={1} pr={2}>
                  <TextField
                    label="Visualisation name"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </Box>
                <Box display="flex" alignItems="flex-end">
                  <Button color="primary" variant="contained" type="submit">
                    Save
                  </Button>
                </Box>
              </Box>
            </form>
          </NoBoxSizing>
          <Dialog open={editorDialogOpen}>
            <form onSubmit={handleSubmit}>
              <DialogTitle>
                Save visualisation
                <IconButton
                  aria-label="close"
                  className={classes.closeButton}
                  onClick={() => dispatch(setEditorOpen(false))}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Box width={420}>
                  <Box width={1} mb={2}>
                    {exportImage.exporting ? (
                      <Box
                        width={1}
                        height={280}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bgcolor="background.default"
                      >
                        <CircularProgress />
                      </Box>
                    ) : (
                      <img
                        src={exportImage.imageDataUri}
                        alt={`A map of ${values.name}`}
                        width="100%"
                        height="auto"
                      />
                    )}
                  </Box>
                  <Box mb={2}>
                    <TextField
                      label="Visualisation name"
                      value={values.name}
                      onChange={handleChange}
                      name="name"
                      style={{ width: "100%" }}
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      label="Description (optional)"
                      multiline
                      rows={5}
                      value={values.description}
                      onChange={handleChange}
                      name="description"
                      fullWidth
                    />
                  </Box>
                  <FormControlLabel
                    label="Visualisation is public"
                    control={
                      <Switch
                        checked={values.isPublic}
                        onChange={handleChange}
                        name="isPublic"
                        color="primary"
                      />
                    }
                  />
                  {!values.isPublic && (
                    <Box mb={2}>
                      <TextField
                        label="Access password (optional)"
                        helperText="Leave "
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                        fullWidth
                      />
                    </Box>
                  )}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  // disabled={isSubmitting}
                >
                  Publish
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </>
      )}
    </Formik>
  );
};

const NoBoxSizing = styled.div`
  * {
    box-sizing: initial !important;
  }
`;

const createVisualisationTag = gql`
  mutation CreateVisualisation($input: CreateVisualisationInput!) {
    createVisualisation(input: $input) {
      title
      id
      description
      user {
        username
      }
    }
  }
`;

const createConfigTag = gql`
  mutation CreateConfig($input: CreateConfigInput!) {
    createConfig(input: $input) {
      id
    }
  }
`;
const createDatasetTag = gql`
  mutation CreateDataset($input: CreateDatasetInput!) {
    createDataset(input: $input) {
      id
    }
  }
`;

type CreateVisualisationResult = {
  createVisualisation: {
    title: string;
    id: string;
  };
};
type CreateConfigResult = {
  createConfig: {
    id: string;
  };
};
type CreateDatasetResult = {
  createDataset: {
    id: string;
  };
};
