import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { LoginButtonAndForm } from '../auth/LoginButtonAndForm';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Geovisualise.it</Typography>
        <Box marginLeft="auto">
          <LoginButtonAndForm />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
