import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../users/interfaces/UserInterface";
import axios from "axios";
import { BASE_URL } from "../../../App";

export const SignInRequest = createAsyncThunk(
  "user/SignInRequest",
  async (userFromClient: loginUser, apiThunk) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/users/signIn`,
        userFromClient
      );
      return data;
    } catch (error) {
      return apiThunk.rejectWithValue(error);
    }
  }
);
