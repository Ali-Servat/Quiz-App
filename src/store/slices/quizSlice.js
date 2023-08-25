import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
     name: 'quizzes',
     initialState: [],
     reducers: {
          quizzesLoaded(quizzes, action) {
               return action.payload;
          },
          quizAdded(quizzes, action) {
               quizzes.push(action.payload);
          },
     },
});

export const { quizzesLoaded, quizAdded } = slice.actions;

export default slice.reducer;
