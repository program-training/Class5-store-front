import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { CartItemInterface } from "../../../order/interfaces/CartItemsInterfaces";

type ProductDetailsProps = { product: CartItemInterface };

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <Box>
      <Typography>{product.name}</Typography>
      <Typography>quantity {product.quantity}</Typography>
    </Box>
  );
};

export default ProductDetails;
