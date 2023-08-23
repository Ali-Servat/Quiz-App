import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
     name: 'auth',
     initialState: null,
     reducers: {
          userLoggedIn(auth, action) {
               return action.payload;
          },
          userLoggedOut(auth, action) {
               return null;
          },
     },
});

export const { userLoggedIn, userLoggedOut } = slice.actions;

export default slice.reducer;
