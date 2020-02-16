import React from 'react';
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
  CircularProgress,
} from '@material-ui/core';
import Storage from '@aws-amplify/storage';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useUser } from '../auth/AuthenticationProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginOpen, setEditorOpen } from '../common/appState';
import { useSnackbar } from 'notistack';
import CloseIcon from '@material-ui/icons/CloseRounded';
import uuid from 'uuid/v4';
import slugify from 'slugify';

import KeplerGlSchema from 'kepler.gl/schemas';
import { RootState } from '../Store';

const useStyles = makeStyles((theme: Theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export const DetailsForm = () => {
  const user = useUser();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  // @ts-ignore
  const { editorDialogOpen } = useSelector<RootState>(s => s.app);

  // @ts-ignore
  const { exportImage } = useSelector(s => s.keplerGl.editor.uiState);

  const handleSimpleFormSubmit = (e: any) => {
    e.preventDefault();
    if (user) {
      dispatch(setEditorOpen(true));
      return;
    }

    enqueueSnackbar("You've must be logged in to save a visualisation");
    dispatch(setLoginOpen(true));
  };

  const keplerState = useSelector<RootState>(s => (s.keplerGl as any).editor);

  const classes = useStyles();

  return (
    <Formik
      initialValues={{ name: 'Test', description: 'description', isPublic: true, password: '' }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string(),
        isPublic: Yup.boolean(),
        password: Yup.string(),
      })}
      onSubmit={async ({ name, description, isPublic }, { setSubmitting }) => {
        try {
          setSubmitting(true);

          const dataToSave = KeplerGlSchema.getDatasetToSave(keplerState);
          const configToSave = KeplerGlSchema.getConfigToSave(keplerState);
          const blobToSave = new Blob([exportImage.dataUri], { type: 'image/png' });

          // push all the files to amplify
          const [image, config, ...datasets] = await Promise.all([
            Storage.put(`${slugify(name, { lower: true })}-thumbnail-${uuid()}.png`, blobToSave, {
              level: 'protected',
              contentType: 'image/png',
            }),
            Storage.put(
              `${slugify(name, { lower: true })}-config-${uuid()}.json`,
              JSON.stringify(configToSave),
              {
                level: 'protected',
                contentType: 'application/json',
              }
            ),
            ...dataToSave.map((dataset: any) =>
              Storage.put(`${uuid()}-${dataset.data.label}`, JSON.stringify(dataset), {
                level: 'protected',
                contentType: dataset.data.label.includes('json') ? 'application/json' : 'text/csv',
              })
            ),
          ]);

          console.log(image, config, datasets);

          const input = {
            title: name,
            description,
            datasets: datasets.map((s3Object, index) => ({
              title: dataToSave[index].data.label,
              file: s3Object,
            })),
            image,
            config: {
              file: config,
            },
          };

          console.log(input);

          // https://aws-amplify.github.io/docs/js/storage#amazon-s3-bucket-cors-policy-setup
        } catch (error) {}
      }}
    >
      {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
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
                    style={{ width: '100%' }}
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
                      style={{ width: '100%' }}
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
