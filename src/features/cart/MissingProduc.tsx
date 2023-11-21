import { Box, Typography } from "@mui/material";
import { ProductCardInterface } from "../products/interfaces/ProductCardInterface";
import { FC } from "react";
type MissingProps = { product: ProductCardInterface };

const Missing: FC<MissingProps> = ({ product }) => {
  return (
    <Box display="flex">
      <Box component="div">
        <Box component="img" src={product.thumbnail} alt={product.title} />
      </Box>
      <Box component="div">
        <Typography component="h3">{product.title}</Typography>
      </Box>
    </Box>
  );
};

export default Missing;
