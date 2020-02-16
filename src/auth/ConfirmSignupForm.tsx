import React from 'react';
import { Formik } from 'formik';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useAuth } from './AuthenticationProvider';
import { useSignupContext } from './SignupDialog';
import { useDispatch } from 'react-redux';
import { setSignupOpen } from '../common/appState';

export const ConfirmSignupForm = () => {
  const auth = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const { username, setUsername, password, setPassword } = useSignupContext();

  const resendSignup = async () => {
    try {
      if (!username) throw new Error();
      await auth.resendSignUp(username);
      enqueueSnackbar('We sent you a new verification code');
    } catch (error) {
      enqueueSnackbar('Error sending new code.', { variant: 'error' });
      setUsername(undefined);
      setPassword(undefined);
    }
  };

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ verificationCode: '' }}
      onSubmit={async ({ verificationCode }, { setSubmitting }) => {
        try {
          setSubmitting(true);
          if (!username) throw new Error();
          const user = await auth.confirmSignUp(username, verificationCode);
          await auth.signIn(username, password);
          console.log(user);
          dispatch(setSignupOpen(false));
          enqueueSnackbar('Email verified! Welcome.');
        } catch (error) {
          enqueueSnackbar('Oops, wrong signup code.', { variant: 'error' });
        }
      }}
    >
      {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <DialogTitle>Confirm email address</DialogTitle>
          <DialogContent>
            <TextField
              label="Verification code (it was emailed to you)"
              value={values.verificationCode}
              name="verificationCode"
              onChange={handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={resendSignup}>Resend verification code</Button>
            <Button variant="contained" color="primary" type="submit">
              Confirm and login
            </Button>
          </DialogActions>
        </form>
      )}
    </Formik>
  );
};
