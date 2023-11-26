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
        maxWidth: "240px",
        minWidth: "240px",
        height: "400px",
        margin: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out", // Add a smooth transition for the transform property
        ":hover": {
          transform: "scale(1.03)", // Increase the scale on hover
        },
      }}
    >
      <Card
        onClick={() => {
          navigate(`/home/products/${product.id}`);
        }}
        sx={{ height: "350px" }}
      >
        <CardMedia
          component="img"
          alt={product.imageAlt}
          height="180px"
          width="240px"
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
          <Typography variant="body2" color="text.secondary">
            {product.quantity > 0 ? "in stock" : "not in stock"}
          </Typography>
        </CardContent>
      </Card>
      <CardActions sx={{ justifyContent: "space-evenly", padding: 0 }}>
        <Button
          size="small"
          sx={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            height: "50px",
            width: "100%",
          }}
          onClick={() => dispatch(addToCart(product.id))}
          disabled={product.quantity < 1}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};
