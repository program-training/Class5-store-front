import { useParams } from "react-router-dom";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { ProductCard } from "../../products/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();

  const products = useAppSelector((store) => store.products).products;

  const productsNow = products.filter(
    (product) => product.category === category
  );

  return (
    <Container style={{ margin: "80px" }}>
      <CssBaseline />
      <Typography
        variant="h2"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        {category}
      </Typography>

      <Box>
        {productsNow.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </Box>
    </Container>
  );
};
export default CategoryPage;
