import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  loginDialogOpen: boolean;
  signupDialogOpen: boolean;
  editorDialogOpen: boolean;
  visualisation: any;
}

const { actions, reducer } = createSlice({
  name: "app",
  initialState: {
    loginDialogOpen: false,
    signupDialogOpen: false,
    editorDialogOpen: false,
    visualisation: undefined
  },
  reducers: {
    setLoginOpen: (state, action) => {
      state.loginDialogOpen = action.payload;
    },
    setSignupOpen: (state, action) => {
      state.signupDialogOpen = action.payload;
    },
    setEditorOpen: (state, action) => {
      state.editorDialogOpen = action.payload;
    },
    setVisualisation: (state, action) => {
      state.visualisation = action.payload;
    }
  }
});

export const appReducer = reducer;
export const {
  setLoginOpen,
  setSignupOpen,
  setEditorOpen,
  setVisualisation
} = actions;
