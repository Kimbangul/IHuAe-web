import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ContentStore from './store';

const ContentSlice = createSlice({
  name: 'Content',
  initialState: ContentStore,
  reducers: {
    setTodayFeel(state, action: PayloadAction<string>) {
      state.todayFeel = action.payload;
    },
    setTodayFeelDesc(state, action: PayloadAction<string>) {
      state.todayFeelDesc = action.payload;
    },
    setReset(state) {
      state.todayFeel = null;
      state.todayFeelDesc = '';
    },
  },
});

export default ContentSlice;
