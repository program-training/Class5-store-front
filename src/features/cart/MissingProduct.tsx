import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { NotInStockApterSub } from "../../order/types/types";
type MissingProps = { product: NotInStockApterSub };

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
          {product.missing} ={" "}
          {(+product.product.salePrice * product.missing).toFixed(2)}$
        </Typography>
        <Typography fontWeight={700}>updated cart {product.exist}</Typography>
      </Box>
    </Box>
  );
};

export default Missing;
