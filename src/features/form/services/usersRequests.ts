import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpUser, loginUser } from "../../users/interfaces/UserInterface";
import {
  MUTATIONS_USER_SIGNIN,
  MUTATIONS_USER_SIGNUP,
} from "../../../services/apollo/mutations";
import client from "../../../apollo/apolloApi";
import { QUERY_USERS } from "../../../services/apollo/queries";
// import { USERS_SUBSCRIPTION } from "../../../services/apollo/subscriptions";

export const SignInRequest = createAsyncThunk(
  "user/SignInRequest",
  async (userFromClient: loginUser, apiThunk) => {
    try {
      const { data } = await client.mutate({
        mutation: MUTATIONS_USER_SIGNIN,
        variables: { input: userFromClient },
      });
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
      const { data } = await client.mutate({
        mutation: MUTATIONS_USER_SIGNUP,
        variables: { input: userFromClient },
      });

      console.log("Successfully Signed Up!");
      return data.SignUpUser; // You might want to return some data if needed
    } catch (error) {
      console.error("Error Signing Up:", error);
      return apiThunk.rejectWithValue(error);
    }
  }
);

export const GetAllUsers = createAsyncThunk("user/GetAllUsers", async () => {
  try {
    const { data } = await client.query({
      query: QUERY_USERS,
    });
    console.log("Success");
    return data.getUsers;
  } catch (error) {
    console.error("Error connecting to the users server");
    throw error;
  }
});
// export const GetUserRegister = createAsyncThunk(
//   "user/GetUserRegister",
//   async () => {
//     try {
//       const data = client
//         .subscribe({
//           query: USERS_SUBSCRIPTION,
//         })
//         .subscribe(({ data }) => {
//           return data.userRegister;
//         });

//       return data;
//     } catch (error) {
//       console.error("Error connecting to the users server");
//       throw error;
//     }
//   }
// );
