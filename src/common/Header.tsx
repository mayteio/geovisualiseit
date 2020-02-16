import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LoginButtonAndForm } from '../auth/LoginButtonAndForm';
import { LogoutButton } from '../auth/LogoutButton';
import { useUser } from '../auth/AuthenticationProvider';

export const Header = () => {
  const user = useUser();
  const { palette } = useTheme();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Box>
          <Typography style={{ marginTop: -4 }} variant="h5">
            Geovisualise<span style={{ color: palette.primary.main }}>.it</span>
          </Typography>
          <Typography style={{ marginTop: -4 }} variant="subtitle2">
            Share beautiful insights
          </Typography>
        </Box>
        <Box marginLeft="auto">
          <Button component={Link} to="/browse">
            Browse
          </Button>
          {!user && <LoginButtonAndForm />}
          {user && (
            <>
              <Button component={Link} to="/v/new">
                Create
              </Button>
              <Button component={Link} to="/me">
                My visualisations
              </Button>
              <LogoutButton />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
