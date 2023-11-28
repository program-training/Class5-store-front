import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { NotInStock } from "../../order/types/types";
type MissingProps = { product: NotInStock };

const Missing: FC<MissingProps> = ({ product }) => {
  return (
    <Box
      display="flex"
      borderRadius={5}
      sx={{ backgroundColor: "oldlace", color: "black" }}
      m={"5px"}
    >
      <Box component="div" display="flex">
        <Box
          component="img"
          src={product.product.imageUrl}
          alt={product.product.imageAlt}
          width={65}
          height={65}
          borderRadius={"10px"}
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <Box component="div">
        <Typography fontWeight={700}>{product.product.name}</Typography>
        <Typography fontWeight={700}>
          reduced from the price: {product.product.salePrice} $ *{" "}
          {product.requiredQuantity} ={" "}
          {(product.product.salePrice * product.requiredQuantity).toFixed(2)}$
        </Typography>
      </Box>
    </Box>
  );
};

export default Missing;
