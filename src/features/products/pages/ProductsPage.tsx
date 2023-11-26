import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Box, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductsCardInterface[] | []>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

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
