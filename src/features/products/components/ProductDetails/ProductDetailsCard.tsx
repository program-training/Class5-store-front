import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import OrderOptions from "./OrderOptions";
import QuantitySelector from "./QuantitySelector";
import { productInCart } from "../../../cart/types/productInCart";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { addProductToCart, setQuantityPlus } from "../../../cart/cartSlice";
interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
const ProductDetailsCard: React.FC<ProductCardProps> = (product) => {
  const { title, description, price, thumbnail } = product;
  const products = useAppSelector((store) => store.products).products;
  const currentProduct = products.find((p) => p.title === title);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const [quantity, setQuantity] = React.useState(1);
  const handleQuantityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setQuantity(event.target.value as number);
  };
  const handleAddToCartClick = (newProduct: productInCart) => {
    const alreadyInCart = cart.findIndex(
      (p) => p.product.title === newProduct.product.title
    );
    if (alreadyInCart !== -1) {
      dispatch(setQuantityPlus(newProduct.product.title));
    } else {
      dispatch(addProductToCart(newProduct));
    }
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
        alt={title}
        height="300px"
        image={thumbnail}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <OrderOptions />
        <QuantitySelector value={quantity} onChange={handleQuantityChange} />
        <Button
          variant="contained"
          onClick={() => {
            if (currentProduct)
              handleAddToCartClick({
                product: currentProduct,
                quantity: quantity,
              });
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
