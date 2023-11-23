import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";
import { FC } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { addToCart } from "../../cart/cartSlice";
import { useNavigate } from "react-router-dom";
type ProductsProps = {
  product: ProductsCardInterface;
};
export const ProductCard: FC<ProductsProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
        alt={product.imageAlt}
        height="300px"
        image={product.imageUrl}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1.25rem" }}
        >
          ${product.salePrice}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <Typography variant="body2" color="text.secondary">
        {product.quantity > 0 ? "in stock" : "not in stock"}
      </Typography>
      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <Button
          onClick={() => {
            navigate(`/home/categories/category/${product.id}`);
          }}
          size="small"
          sx={{ backgroundColor: "#2196F3", color: "#fff" }}
        >
          Learn More
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "#4CAF50", color: "#fff" }}
          onClick={() => dispatch(addToCart(product.id))}
          disabled={product.quantity < 1}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};
