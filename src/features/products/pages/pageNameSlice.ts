import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  pageName: string;
}

const initialState: InitialState = {
  pageName: "home",
};

export const pageNameSlice = createSlice({
  name: "pageName",
  initialState,
  reducers: {
    setPageName: (state, action: PayloadAction<string>) => {
      state.pageName = action.payload;
    },
  },
});

export const { setPageName } = pageNameSlice.actions;
export default pageNameSlice.reducer;
