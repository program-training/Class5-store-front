import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "../form/services/localStorageService";
import { TokenType } from "../layout/types/token";

interface InitialState {
  token: string | null;
  decodedToken: TokenType | null;
}

const initialState: InitialState = {
  token: getToken(),
  decodedToken: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setDecodedToken: (state, action: PayloadAction<TokenType | null>) => {
      state.decodedToken = action.payload ? { ...action.payload } : null;
    },
  },
  //   extraReducers(builder):{

  //   }
});

export const { setToken, setDecodedToken } = tokenSlice.actions;
export default tokenSlice.reducer;
