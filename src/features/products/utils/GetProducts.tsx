// // With God's Help

// import { setProducts } from "../productsSlice";
// import { useAppDispatch } from "../../../store/hooks";
// import { useEffect } from "react";
// import axios from "axios";

// export const GetProducts = () => {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3333/api/products")
//       .then((res) => dispatch(setProducts(res.data.products)))
//       .catch((error) => console.log(error));
//   }, []);
//   return <></>;
// };
