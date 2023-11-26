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
import { CardActionsButtonStyle, cardStyle } from "../helpers/cardStyles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DiscountComponent from "../../cart/utils/DiscountComponent";
type ProductsProps = {
  product: ProductsCardInterface;
};
export const ProductCard: FC<ProductsProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Card sx={cardStyle}>
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
          <DiscountComponent
            salePrice={product.salePrice}
            discountPercentage={product.discountPercentage}
          />
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
          sx={CardActionsButtonStyle}
          onClick={() => dispatch(addToCart(product.id))}
          variant="contained"
          disabled={product.quantity < 1}
        >
          Add To Cart
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
