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
  },
});

export const { setModalClose, setModalContent } = UISlice.actions;
export default UISlice;
