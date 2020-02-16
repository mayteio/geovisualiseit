import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  loginDialogOpen: boolean;
  signupDialogOpen: boolean;
  editorDialogOpen: boolean;
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    loginDialogOpen: false,
    signupDialogOpen: false,
    editorDialogOpen: false,
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
  },
});

export const appReducer = reducer;
export const { setLoginOpen, setSignupOpen, setEditorOpen } = actions;
