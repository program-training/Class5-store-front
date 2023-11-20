import { useParams } from "react-router-dom";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { GetCategories } from "../../categories/utils/GetCategories";
import { useAppSelector } from "../../../store/hooks";
import { GetProducts } from "../../products/utils/GetProducts";
import { ProductCard } from "../../products/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  GetCategories();
  GetProducts();

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
          <ProductCard
            key={i}
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
    </Container>
  );
};
export default CategoryPage;
