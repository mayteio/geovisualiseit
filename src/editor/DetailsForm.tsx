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
} from '@material-ui/core';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useUser } from '../auth/AuthenticationProvider';
import { useDispatch } from 'react-redux';
import { setLoginOpen } from '../common/appState';
import { useSnackbar } from 'notistack';

export const DetailsForm = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const user = useUser();

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSimpleFormSubmit = () => {
    if (user) {
      setDialogOpen(true);
      return;
    }

    enqueueSnackbar("You've gotta login to save a visualisation");
    dispatch(setLoginOpen(true));
  };

  return (
    <Formik
      initialValues={{ name: '', description: '', isPublic: true }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string(),
        isPublic: Yup.boolean(),
      })}
      onSubmit={({ name, description, isPublic }, { setSubmitting }) => {}}
    >
      {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <>
          <NoBoxSizing>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSimpleFormSubmit();
              }}
            >
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
          <Dialog open={dialogOpen}>
            <DialogTitle>Save visualisation</DialogTitle>
            <DialogContent>
              <Box width={420}>
                <form onSubmit={handleSubmit}>
                  <Box mb={2}>
                    <TextField
                      label="Visualisation name"
                      value={values.name}
                      onChange={handleChange}
                      name="name"
                      style={{ width: '100%' }}
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      label="Description"
                      multiline
                      rows={5}
                      value={values.description}
                      onChange={handleChange}
                      name="description"
                      style={{ width: '100%' }}
                    />
                  </Box>
                  <FormControlLabel
                    label="Visualisation is public"
                    control={
                      <Switch
                        value={values.isPublic}
                        onChange={handleChange}
                        name="isPublic"
                        color="primary"
                      />
                    }
                  />
                  <Box></Box>
                </form>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" type="submit">
                Publish
              </Button>
            </DialogActions>
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
