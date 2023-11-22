import ProductDetailsCard from "../components/ProductDetails/ProductDetailsCard";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import { useAppSelector } from "../../../store/hooks";
import  ProductInterface from "../interfaces/ProductInterface";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState< ProductInterface | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3333/api/products/${productId}`)
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
