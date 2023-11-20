import { Box, CssBaseline, Typography } from "@mui/material";
import { GetCategories } from "../../categories/utils/GetCategories";
import { useAppSelector } from "../../../store/hooks";
import { GetProducts } from "../../products/utils/GetProducts";
import { ProductCard } from "../../products/components/ProductCard";

const CategoriesPage = () => {
  GetCategories();
  GetProducts();

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
                  <ProductCard
                    key={j}
                    title={product.title}
                    description={product.description}
                    thumbnail={product.thumbnail}
                    price={product.price}
                    category={product.category}
                    _id={product._id}
                    rating={product.rating}
                    stock={product.stock}
                    brand={product.brand}
                  />
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
