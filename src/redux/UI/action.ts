import { createSlice } from '@reduxjs/toolkit';
import UIStore from './store';

const UISlice = createSlice({
  name: 'UI',
  initialState: UIStore,
  reducers: {
    setModalContent(state, action) {
      state.modal = action.payload;
    },
    setModalClose(state) {
      state.modal = false;
    },
  },
});

export const { setModalClose, setModalContent } = UISlice.actions;
export default UISlice;
