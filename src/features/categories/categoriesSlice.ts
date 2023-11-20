/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Categories } from "./interfaces/CategoriesInterface";
import axios from "axios";

export const fetchCategories = createAsyncThunk("user/fetchUsers", () =>
  axios
    .get("http://localhost:3333/api/categories")
    .then(({ data }: any) => data)
);

interface InitialState {
  categories: Categories[];
}

const initialState: InitialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
