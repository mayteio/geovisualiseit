import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  loginDialogOpen: boolean;
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    loginDialogOpen: false,
    signupDialogOpen: false,
  },
  reducers: {
    setLoginOpen: (state, action) => {
      state.loginDialogOpen = action.payload;
    },
    setSignupOpen: (state, action) => {
      state.signupDialogOpen = action.payload;
    },
  },
});

export const appReducer = reducer;
export const { setLoginOpen, setSignupOpen } = actions;
