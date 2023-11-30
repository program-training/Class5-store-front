import { createSlice } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";
import { getUser, setItem } from "../form/services/localStorageService";
import { logedInUser } from "./interfaces/UserInterface";
import { SignInRequest, SignUpRequest } from "../form/services/usersRequests";

interface InitialState {
  user: logedInUser | null;
  pending: boolean;
  error: string | SerializedError;
}

const initialState: InitialState = {
  user: getUser(),
  pending: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(SignInRequest.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(SignInRequest.fulfilled, (state, { payload }) => {
      state.pending = false;
      setItem("token", payload);
      state.user = getUser();
      return state;
    }),
      builder.addCase(SignInRequest.rejected, (state, { error }) => {
        state.pending = false;
        state.error = error;
        return state;
      });
    builder.addCase(SignUpRequest.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(SignUpRequest.fulfilled, (state) => {
      state.pending = false;
      return state;
    });
    builder.addCase(SignUpRequest.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error;
      return state;
    });
  },
});

export default userSlice.reducer;
