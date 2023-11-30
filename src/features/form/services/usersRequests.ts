import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpUser, loginUser } from "../../users/interfaces/UserInterface";
import axios from "axios";
import { BASE_URL } from "../../../App";

export const SignInRequest = createAsyncThunk(
  "user/SignInRequest",
  async (userFromClient: loginUser, apiThunk) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/signIn`,
        userFromClient
      );
      return data;
    } catch (error) {
      return apiThunk.rejectWithValue(error);
    }
  }
);

export const SignUpRequest = createAsyncThunk(
  "user/SignUpRequest",
  async (userFromClient: SignUpUser, apiThunk) => {
    try {
      await axios.post(`${BASE_URL}/users/admin`, userFromClient);
    } catch (error) {
      return apiThunk.rejectWithValue(error);
    }
  }
);
