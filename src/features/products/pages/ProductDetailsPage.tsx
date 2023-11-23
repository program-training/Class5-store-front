import ProductDetailsCard from "../components/ProductDetails/ProductDetailsCard";
import { useParams } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";
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
      <ProductDetailsCard product={product} />;
    </>
  );
};
export default ProductDetailsPage;
