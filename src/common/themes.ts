import { createMuiTheme, darken, lighten } from "@material-ui/core";

export const muiTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#03F7EB" },
    secondary: { main: "#657089" },
    success: { main: "#72B01D" },
    background: {
      paper: "#313642",
      default: "#1E2128"
    },
    text: {
      primary: "#F3EFF5"
    }
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    fontFamily: [
      "Inconsolata",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    button: {
      textTransform: "none"
    }
  }
});

// smoky black: '#0D0A0B',
export const keplerTheme = {
  sidePanelBg: muiTheme.palette.background.paper,
  sidePanelHeaderBg: muiTheme.palette.background.default,

  panelHeaderIcon: darken(muiTheme.palette.background.paper, 0.3),

  modalDialogBgd: muiTheme.palette.background.paper,
  modalDialogColor: muiTheme.palette.text.primary,
  fontFamily: muiTheme.typography.fontFamily,

  // buttons
  primaryBtnBgd: muiTheme.palette.primary.main,
  primaryBtnColor: muiTheme.palette.background.default,
  primaryBtnColorHover: muiTheme.palette.background.default,
  primaryBtnBgdHover: darken(muiTheme.palette.primary.main, 0.1),
  primaryBtnRadius: muiTheme.shape.borderRadius + "px",

  secondaryBtnBgd: muiTheme.palette.secondary.main,
  secondaryBtnBgdHover: lighten(muiTheme.palette.secondary.main, 0.1),

  inputBgd: muiTheme.palette.background.default
};
