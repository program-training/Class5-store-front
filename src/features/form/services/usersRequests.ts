import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpUser, loginUser } from "../../users/interfaces/UserInterface";
import axios from "axios";
import { BASE_URL } from "../../../App";
import { useMutation } from "@apollo/client";
import { MUTATIONS_USER_SIGNUP } from "../../../services/apollo/mutations";

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
      useMutation(MUTATIONS_USER_SIGNUP, {
        variables: { SignUpUserInput: userFromClient },
      });
      console.log("Successfully Signed Up!");
    } catch (error) {
      console.log("Error Signed Up!");
      return apiThunk.rejectWithValue(error);
    }
  }
);
