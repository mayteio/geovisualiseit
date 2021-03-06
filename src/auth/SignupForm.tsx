import React from "react";
import {
  DialogContent,
  Box,
  TextField,
  DialogActions,
  Button,
  DialogTitle
} from "@material-ui/core";
import { useAuth } from "../auth/AuthenticationProvider";
import { useSnackbar } from "notistack";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSignupContext } from "./SignupDialog";

export const SignupForm = () => {
  const auth = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const { setUsername, setPassword } = useSignupContext();

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(),
        email: Yup.string()
          .required()
          .email(),
        password: Yup.string().required()
      })}
      onSubmit={async ({ username, email, password }, { setSubmitting }) => {
        try {
          setSubmitting(true);
          await auth.signUp({
            username,
            password,
            attributes: { email }
          });
          setUsername(username);
          setPassword(password);
          enqueueSnackbar(
            "We've sent you a verification email. Please grab it now!"
          );
        } catch (error) {
          enqueueSnackbar("There was an error logging in!", {
            variant: "error"
          });
          console.log(error);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <DialogTitle>Sign up</DialogTitle>
          <DialogContent>
            <Box width={420}>
              <Box mb={2}>
                <TextField
                  label="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  fullWidth
                  disabled={isSubmitting}
                  helperText={touched.username && errors.username}
                  error={Boolean(touched.username && errors.username)}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Email Address"
                  name="email"
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                  fullWidth
                  disabled={isSubmitting}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email && errors.email)}
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
                  disabled={isSubmitting}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Sign up
            </Button>
          </DialogActions>
        </form>
      )}
    </Formik>
  );
};
