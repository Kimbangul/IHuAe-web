import { configureStore } from '@reduxjs/toolkit';
import UISlice, { setModalClose, setModalContent } from './UI/action';

const indexStore = configureStore({
  reducer: {
    ui: UISlice.reducer,
  },
});

export const indexReducer = {
  ui: UISlice.reducer,
};

export type RootStateType = ReturnType<typeof indexStore.getState>;
export default indexStore;
