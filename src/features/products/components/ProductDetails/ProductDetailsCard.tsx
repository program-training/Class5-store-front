import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../../store/hooks";
import { addToCart } from "../../../cart/cartSlice";
import { ProductsCardInterface } from "../../interfaces/ProductCardInterface";
interface ProductCardProps {
  product: ProductsCardInterface;
}
const ProductDetailsCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handlePriceComparisonClick = () => {
    console.log(`Clicked on price comparison`);
  };
  return (
    <Card
      sx={{
        minWidth: "600px",
        maxWidth: "600px",
        margin: "100px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        height="300px"
        image={product.imageUrl}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.salePrice}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.quantity > 0 ? "in stock" : "not in stock"}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(addToCart(product.id));
          }}
          disabled={product.quantity < 1}
          sx={{
            width: "100%",
            marginTop: 2,
            backgroundColor: "#4CAF50",
            color: "#fff",
          }}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          onClick={handlePriceComparisonClick}
          sx={{
            width: "100%",
            marginTop: 2,
            backgroundColor: "#CAE942",
            color: "#fff",
          }}
        >
          Price Comparison
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductDetailsCard;
