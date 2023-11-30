import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import ProductCartButton from "./ProductCartButton";
import DiscountComponent from "../utils/DiscountComponent";
import { PropProductInCart } from "../../../order/types/types";
const ProductInCart = ({ productCart }: PropProductInCart) => {
  const cart = useAppSelector((state) => state.cart.cart);

  const productIndexInCart = cart.findIndex(
    (p) => p.product.id === productCart.product.id
  );

  return (
    <Card sx={{ width: 250, margin: 1 }}>
      <CardMedia
        sx={{ height: 140, maxWidth: 250 }}
        image={productCart.product.imageUrl}
        title={productCart.product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productCart.product.name}
        </Typography>
        <DiscountComponent
          salePrice={+productCart.product.salePrice}
          discountPercentage={productCart.product.discountPercentage}
        />
        <Grid>
          <Typography variant="body2" color="text.secondary">
            amount{" "}
            {cart[productIndexInCart] &&
              cart[productIndexInCart].requiredQuantity}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body2" color="text.secondary">
            price {productCart.sumProductInCart.toFixed(2)}
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <ProductCartButton productCart={productCart} />
      </CardActions>
    </Card>
  );
};
export default ProductInCart;
