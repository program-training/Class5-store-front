import ProductDetailsCard from "../components/ProductDetails/ProductDetailsCard";
import { useParams } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";
import Banner from "../../baners/Banner";
const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<ProductsCardInterface | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!product) return <>null</>;
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: "100px",
          right: "20px",
        }}
      >
        <Banner id={24} />
      </Box>
      <ProductDetailsCard product={product} />;
    </>
  );
};
export default ProductDetailsPage;
