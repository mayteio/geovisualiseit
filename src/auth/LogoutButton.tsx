import React from 'react';
import { Button } from '@material-ui/core';
import { useAuth } from './AuthenticationProvider';

export const LogoutButton = () => {
  const auth = useAuth();
  return <Button onClick={() => auth.signOut()}>Logout</Button>;
};
