import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Box, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductsCardInterface[] | []>([]);

  useEffect(() => {
    axios
      .get("https://app-store-server1.onrender.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <CssBaseline />
      <Box className="container" style={{ padding: "20px" }}>
        <Typography
          sx={{ textAlign: "center", marginBottom: "30px" }}
        ></Typography>
        <Box className="product-grid">
          {products?.map((product, i) => (
            <Box key={`${product.name}-${i}`}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductsPage;
