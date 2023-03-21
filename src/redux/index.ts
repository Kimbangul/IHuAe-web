import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import UISlice, { setModalClose, setModalContent } from './UI/action';

const indexStore = configureStore({
  reducer: {
    ui: UISlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const indexAction = { setModalClose, setModalContent };

export type RootStateType = ReturnType<typeof indexStore.getState>;
export default indexStore;
