import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Box, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";
import { useAppDispatch } from "../../../store/hooks";
import { setBySale } from "../productsSlice";
import WaitingComponent from "../../form/components/WaitingComponent";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<ProductsCardInterface[] | []>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setTimeout(() => {
          setProducts(res.data);
        }, 1000);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const sale = products
      .filter((item) => item.discountPercentage > 0)
      .map((item) => item.id);
    dispatch(setBySale(sale));
  }, [products]);

  if (!products.length) return <WaitingComponent />;

  return (
    <>
      <CssBaseline />
      <Typography
        sx={{ textAlign: "center", marginBottom: "30px" }}
      ></Typography>
      <Box
        className="product-grid"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "90%",
          justifyContent: "center",
        }}
      >
        {products?.map((product, i) => (
          <Box
            key={`${product.name}-${i}`}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "90%",
              justifyContent: "center",
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ProductsPage;
