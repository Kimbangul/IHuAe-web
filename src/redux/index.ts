import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import UISlice, { setModalClose, setModalContent, setAlertClose, setAlertContent } from './UI/action';
import ContentSlice, { setTodayFeel, setTodayFeelDesc, setReset } from './Content/action';

const indexStore = configureStore({
  reducer: {
    ui: UISlice.reducer,
    content: ContentSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const indexAction = { setModalClose, setModalContent, setAlertClose, setAlertContent, setTodayFeel, setTodayFeelDesc, setReset };

export type RootStateType = ReturnType<typeof indexStore.getState>;
export default indexStore;
