import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductCardInterface } from "../interfaces/ProductCardInterface";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { productInCart } from "../../cart/types/productInCart";
import { addProductToCart, setQuantityPlus } from "../../cart/cartSlice";
import { useNavigate } from "react-router-dom";

export const ProductCard: FC<ProductCardInterface> = (product) => {
  const navigate = useNavigate();
  const { title, description, price, thumbnail } = product;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const handleAddProductToCart = (newProduct: productInCart) => {
    const alreadyInCart = cart.findIndex(
      (p) => p.product.title === newProduct.product.title
    );
    if (alreadyInCart !== -1) {
      dispatch(setQuantityPlus(newProduct.product.title));
    } else {
      dispatch(addProductToCart(newProduct));
    }
  };
  return (
    <Card
      sx={{
        maxWidth: "600px",
        minWidth: "600px",
        margin: "20px",
        borderRadius: "8px",
        // backgroundColor: "#0f0d14",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out", // Add a smooth transition for the transform property
        ":hover": {
          transform: "scale(1.03)", // Increase the scale on hover
        },
      }}
    >
      <CardMedia
        component="img"
        alt="Apple iPhone 11"
        height="300px"
        image={thumbnail}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1.25rem", color: "red" }}
        >
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <Button
          onClick={() => {
            navigate(`/home/categories/${product.category}/${title}`);
          }}
          size="small"
          sx={{ backgroundColor: "#2196F3", color: "#fff" }}
        >
          Learn More
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "#4CAF50", color: "#fff" }}
          onClick={() =>
            handleAddProductToCart({ product: product, quantity: 1 })
          }
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};
