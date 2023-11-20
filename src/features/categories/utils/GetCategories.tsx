// With God's Help

import axios from "../helpers/axios";
import { setCategories } from "../categoriesSlice";
import { useAppDispatch } from "../../../store/hooks";
import { useEffect } from "react";

export const GetCategories = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.axiosVar
      .get("https://project-team3-server.onrender.com/api/categories")
      .then((res) => dispatch(setCategories(res.data)))
      .catch((error) => console.log(error));
  }, []);
  return <></>;
};
