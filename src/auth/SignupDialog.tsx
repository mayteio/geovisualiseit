import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Dialog } from '@material-ui/core';
import { SignupForm } from './SignupForm';
import { ConfirmSignupForm } from './ConfirmSignupForm';

const SignupContext = React.createContext<
  | {
      username: string | undefined;
      setUsername: React.Dispatch<string | undefined>;
      password: string | undefined;
      setPassword: React.Dispatch<string | undefined>;
    }
  | undefined
>(undefined);

export const SignupDialog = () => {
  // @ts-ignore
  const { signupDialogOpen } = useSelector<RootState>(s => s.app);
  const [username, setUsername] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();

  return (
    <Dialog open={signupDialogOpen}>
      <SignupContext.Provider value={{ username, setUsername, password, setPassword }}>
        {username || password ? <ConfirmSignupForm /> : <SignupForm />}
      </SignupContext.Provider>
    </Dialog>
  );
};

export const useSignupContext = () => {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error();
  return ctx;
};
