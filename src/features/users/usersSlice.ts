import { createSlice } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";
import {
  getToken,
  getUser,
  setItem,
} from "../form/services/localStorageService";
import UserInterface, { logedInUser } from "./interfaces/UserInterface";
import {
  GetAllUsers,
  SignInRequest,
  SignUpRequest,
} from "../form/services/usersRequests";

interface InitialState {
  users: UserInterface[];
  user: logedInUser | null;
  pending: boolean;
  error: string | SerializedError;
  token: string | null;
}

const initialState: InitialState = {
  users: [],
  user: getUser(),
  pending: false,
  token: getToken(),
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
  extraReducers(builder) {
    builder.addCase(SignInRequest.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(SignInRequest.fulfilled, (state, { payload }) => {
      state.pending = false;
      setItem("token", payload.SignInUser.token);
      state.user = getUser();
      state.token = getToken();
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
    builder.addCase(SignUpRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
      return state;
    });
    builder.addCase(SignUpRequest.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error;
      return state;
    });
    builder.addCase(GetAllUsers.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(GetAllUsers.fulfilled, (state, action) => {
      state.pending = false;
      state.users = action.payload;
      return state;
    });
    builder.addCase(GetAllUsers.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error;
      return state;
    });
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;

// logOut: (state) => {
//   client.clearStore();
//   removeToken();
//   state.token = null;
//   state.userState = null;
//   return state;
// },
