import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  Box,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginOpen, setSignupOpen } from '../common/appState';
import { Formik } from 'formik';
import { useAuth } from './AuthenticationProvider';
import { useSnackbar } from 'notistack';

export const LoginButtonAndForm: React.FC = () => {
  const { loginDialogOpen } = useSelector((s: any) => s.app);

  const dispatch = useDispatch();
  const auth = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <Button onClick={() => dispatch(setLoginOpen(true))}>Login</Button>
      {
        <Dialog open={loginDialogOpen} onClose={() => dispatch(setLoginOpen(false))}>
          <DialogTitle>Login</DialogTitle>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={async ({ username, password }, { setSubmitting }) => {
              try {
                setSubmitting(true);
                await auth.signIn(username, password);
              } catch (error) {
                enqueueSnackbar('There was an error logging in!', { variant: 'error' });
                setSubmitting(false);
              }
            }}
          >
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <DialogContent>
                  <Box width={420}>
                    <Box mb={2}>
                      <TextField
                        label="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <TextField
                        label="Password"
                        name="password"
                        value={values.password}
                        type="password"
                        onChange={handleChange}
                        fullWidth
                      />
                    </Box>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      dispatch(setSignupOpen(true));
                      dispatch(setLoginOpen(false));
                    }}
                  >
                    Not a member? Sign up
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    Login
                  </Button>
                </DialogActions>
              </form>
            )}
          </Formik>
        </Dialog>
      }
    </>
  );
};
