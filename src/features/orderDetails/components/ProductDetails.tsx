import { FC } from "react";
import ProductInterface from "../../products/interfaces/ProductInterface";
import { Box, Typography } from "@mui/material";

type ProductDetailsProps = { product: ProductInterface };

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <Box>
      <Box component="img" src={product.imageUrl} alt={product.imageAlt} />
      <Typography>{product.name}</Typography>
      <Typography>quantity {product.quantity}</Typography>
    </Box>
  );
};

export default ProductDetails;
