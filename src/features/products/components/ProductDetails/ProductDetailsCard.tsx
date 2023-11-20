import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import OrderOptions from "./OrderOptions";
import QuantitySelector from "./QuantitySelector";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { addToCart } from "../../../cart/cartSlice";
import { ProductCardInterface } from "../../interfaces/ProductCardInterface";
interface ProductCardProps {
  product: ProductCardInterface;
}
const ProductDetailsCard: React.FC<ProductCardProps> = ({ product }) => {
  const products = useAppSelector((store) => store.products).products;
  const currentProduct = products.find((p) => p.title === product.title);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const handleQuantityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setQuantity(event.target.value as number);
  };

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
        alt={product.title}
        height="300px"
        image={product.thumbnail}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <OrderOptions />
        <QuantitySelector value={quantity} onChange={handleQuantityChange} />
        <Button
          variant="contained"
          onClick={() => {
            if (currentProduct) dispatch(addToCart(product));
          }}
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
