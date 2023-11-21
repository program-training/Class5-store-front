import { Box, CssBaseline, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { ProductCard } from "../../products/components/ProductCard";

const CategoriesPage = () => {
  const categories = useAppSelector((store) => store.categories).categories;
  const products = useAppSelector((store) => store.products).products;

  return (
    <>
      <CssBaseline />
      <Box sx={{ marginTop: "80px" }}>
        {categories.map((category, i) => {
          const sortedProducts = products.filter(
            (product) => product.category === category.category_name
          );

          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "5px",
                }}
              >
                {category.category_name}
              </Typography>
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {sortedProducts.map((product, j) => (
                  <ProductCard key={j} product={product} />
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default CategoriesPage;
