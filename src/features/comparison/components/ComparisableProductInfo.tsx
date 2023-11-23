import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Rating,
  CardActions,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductsCardInterface } from "../../products/interfaces/ProductCardInterface";

export type PropProducts = {
  product: ProductsCardInterface;
};

const ComparisableProductInfo = ({ product }: PropProducts) => {
  return (
    <Box sx={{ margin: 1 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={product.imageUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <Grid>
          {product.discountPercentage && product.discountPercentage > 0 ? (
            <>
              <Typography variant="body1" sx={{ display: "inline", margin: 1 }}>
                {parseFloat(
                  (
                    ((100 - product.discountPercentage) / 100) *
                    product.salePrice
                  ).toFixed(1)
                )}
                $
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through", display: "inline" }}
              >
                {product.salePrice}$
              </Typography>
            </>
          ) : (
            <Typography variant="body1" sx={{ display: "inline" }}>
              {product.salePrice}$
            </Typography>
          )}
        </Grid>

        <Rating
          name="half-rating-read"
          defaultValue={product.discountPercentage}
          precision={0.01}
          readOnly
        />

        <CardActions>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
          >
            Add Product
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ComparisableProductInfo;
