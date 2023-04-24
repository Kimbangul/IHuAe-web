import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

import UIStore from './store';

const UISlice = createSlice({
  name: 'UI',
  initialState: UIStore,
  reducers: {
    setModalContent(state, action: PayloadAction<ReactNode>) {
      state.modal = action.payload;
    },
    setModalClose(state) {
      state.modal = false;
    },
    setAlertContent(state, action: PayloadAction<ReactNode>) {
      state.alert = action.payload;
    },
    setAlertClose(state) {
      state.alert = false;
    },
  },
});

export const { setModalClose, setModalContent, setAlertClose, setAlertContent } = UISlice.actions;
export default UISlice;
