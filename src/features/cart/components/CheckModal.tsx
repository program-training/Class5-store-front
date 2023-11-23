import { FC } from "react";
import { ProductsCardInterface } from "../../products/interfaces/ProductCardInterface";
import { Box, Typography } from "@mui/material";
import Missing from "../MissingProduct";

type CheckExistProps = { products: ProductsCardInterface[] };

const CheckExist: FC<CheckExistProps> = ({ products }) => {
  return (
    <Box>
      <Typography variant="h3">
        Dear customer, some of the products in your cart are no longer in stock,
        we apologize for the inconvenience, the price of the cart has been
        updated according to the existing products
      </Typography>
      <Box>
        {products.map((product) => (
          <Missing product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default CheckExist;
