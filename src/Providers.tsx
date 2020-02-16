import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { muiTheme } from './common/themes';
import { AuthenticationProvider } from './auth/AuthenticationProvider';
import { StoreProvider } from './Store';
import { SnackbarProvider } from 'notistack';
import { StyleOverrides } from './common/StyleOverrides';

export const Providers: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeProvider theme={muiTheme}>
        <StyleOverrides>
          <SnackbarProvider>
            <StoreProvider>
              <AuthenticationProvider>{children}</AuthenticationProvider>
            </StoreProvider>
          </SnackbarProvider>
        </StyleOverrides>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
