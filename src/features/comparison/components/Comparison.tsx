import { Box } from "@mui/material";
import ComparisableProductInfo from "./ComparisableProductInfo";
import { ProductCardInterface } from "../../products/interfaces/ProductCardInterface";
export const productForTesting: ProductCardInterface = {
  _id: "6551de15e0b6aa85b2d511bf",
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};

const Comparison = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <ComparisableProductInfo product={productForTesting} />
      <ComparisableProductInfo product={productForTesting} />
    </Box>
  );
};
export default Comparison;
