import React from "react";
import { ThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline
} from "@material-ui/core";
import { muiTheme, keplerTheme } from "./common/themes";
import { AuthenticationProvider } from "./auth/AuthenticationProvider";
import { StoreProvider } from "./Store";
import { SnackbarProvider } from "notistack";
import { GraphQLProvider } from "./common/GraphQLProvider";
import { StyleOverrides } from "./common/StyleOverrides";
import { ProfileProvider } from "./auth/ProfileProvider";

export const Providers: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeProvider theme={keplerTheme}>
        <StyleOverrides>
          <SnackbarProvider>
            <StoreProvider>
              <AuthenticationProvider>
                <GraphQLProvider>
                  <ProfileProvider>{children}</ProfileProvider>
                </GraphQLProvider>
              </AuthenticationProvider>
            </StoreProvider>
          </SnackbarProvider>
        </StyleOverrides>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
