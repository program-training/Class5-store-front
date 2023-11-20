import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import ProductCartButton from "./ProductCartButton";
import { PropProductInCart } from "../types/productInCart";

const ProductInCart = ({ productCart }: PropProductInCart) => {
  const cart = useAppSelector((state) => state.cart.cart);

  const productIndexInCart = cart.findIndex(
    (p) => p.product.title === productCart.product.title
  );

  return (
    <Card sx={{ width: 250, margin: 1 }}>
      <CardMedia
        sx={{ height: 140, maxWidth: 250 }}
        image={productCart.product.thumbnail}
        title={productCart.product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productCart.product.title}
        </Typography>
        <Grid>
          {productCart.product.discountPercentage &&
          productCart.product.discountPercentage > 0 ? (
            <>
              <Typography variant="body1" sx={{ display: "inline", margin: 1 }}>
                {parseFloat(
                  (
                    ((100 - productCart.product.discountPercentage) / 100) *
                    productCart.product.price
                  ).toFixed(1)
                )}
                $
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through", display: "inline" }}
              >
                {productCart.product.price}$
              </Typography>
            </>
          ) : (
            <Typography variant="body1" sx={{ display: "inline" }}>
              {productCart.product.price}$
            </Typography>
          )}
        </Grid>
        <Grid>
          <Typography variant="body2" color="text.secondary">
            quantity{" "}
            {cart[productIndexInCart] && cart[productIndexInCart].quantity}
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
