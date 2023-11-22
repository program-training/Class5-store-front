// With God's Help

import axios from "../helpers/axios";
import { setProducts } from "../productsSlice";
import { useAppDispatch } from "../../../store/hooks";
import { useEffect } from "react";

export const GetProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.axiosVar
      .get("http://localhost:3333/api/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((error) => console.log(error));
  }, []);
  return <></>;
};
