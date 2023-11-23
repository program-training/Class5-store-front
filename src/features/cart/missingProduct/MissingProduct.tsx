import { Box, Typography } from "@mui/material";
import { ProductsCardInterface } from "../../products/interfaces/ProductCardInterface";
import { FC } from "react";

type MissingProps = {
  product: ProductsCardInterface;
  requiredQuantity: number;
};

const Missing: FC<MissingProps> = ({ product, requiredQuantity }) => {
  const availableQuantity = product.quantity;
  const quantitySold = requiredQuantity;
  const remainingQuantity = availableQuantity - quantitySold;

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
          src={product.imageUrl}
          alt={product.imageAlt}
          width={250}
          borderRadius={"10px"}
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <Box component="div" width={"300px"} height="fitContent">
        <Typography component="h3" fontWeight={800}>
          product name:
          <br />
          {product.name}
        </Typography>
        <Typography component="h3" fontWeight={800} margin={2}>
          reduced from the price:
          <br />
          {product.salePrice} $
        </Typography>
        <Typography component="h3" fontWeight={800} margin={2}>
          available quantity:
          {availableQuantity}
          <br />
        </Typography>
        <Typography component="h3" fontWeight={800} margin={2}>
          Remaining quantity:
          <br />
          {remainingQuantity > 0 ? remainingQuantity : "Out of stock"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Missing;
