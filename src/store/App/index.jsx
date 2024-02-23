import { configureStore } from '@reduxjs/toolkit';
import incrementReducer from './Incrementslice';
import hrAssignReducer from '../hr-assign-slice';

export const store = configureStore({
  reducer: {
    increment: incrementReducer,
    hrAssignDetails: hrAssignReducer,
  },
});
