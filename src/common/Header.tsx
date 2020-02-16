import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { LoginButtonAndForm } from '../auth/LoginButtonAndForm';
import { LogoutButton } from '../auth/LogoutButton';
import { useUser } from '../auth/AuthenticationProvider';

export const Header = () => {
  const user = useUser();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Box>
          <Typography style={{ marginTop: -4 }} variant="h5">
            Geovisualise.it
          </Typography>
          <Typography style={{ marginTop: -4 }} variant="subtitle2">
            Share beautiful insights
          </Typography>
        </Box>
        <Box marginLeft="auto">
          {!user && <LoginButtonAndForm />}
          {user && <LogoutButton />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
