import ProductDetailsCard from "../components/ProductDetails/ProductDetailsCard";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { ProductCardInterface } from "../interfaces/ProductCardInterface";
import { CssBaseline } from "@mui/material";
const ProductDetailsPage = () => {
  const { product } = useParams();
  const products = useAppSelector((store) => store.products).products;
  const myProduct = products.find(
    (p) => String(p.title) === product
  ) as ProductCardInterface;
  return (
    <>
      <CssBaseline />
      <ProductDetailsCard
        title={myProduct.title}
        description={myProduct.description}
        price={myProduct.price}
        thumbnail={myProduct.thumbnail}
      />
      ;
    </>
  );
};
export default ProductDetailsPage;
