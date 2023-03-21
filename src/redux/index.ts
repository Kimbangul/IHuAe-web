import { configureStore } from '@reduxjs/toolkit';
import UISlice from './UI/action';

const indexStore = configureStore({
  reducer: {
    ui: UISlice.reducer,
  },
});

export default indexStore;
