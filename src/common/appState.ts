import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  loginDialogOpen: boolean;
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    loginDialogOpen: false,
  },
  reducers: {
    setLoginOpen: (state, action) => {
      state.loginDialogOpen = action.payload;
    },
  },
});

export const appReducer = reducer;
export const { setLoginOpen } = actions;
