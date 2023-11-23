import { Box } from "@mui/material";
import { ProductsCardInterface } from "../../products/interfaces/ProductCardInterface";
import { FC } from "react";
import Missing from "./MissingProduct";

type ProductProps = {
  product: ProductsCardInterface;
  requiredQuantity: number;
  onDeleteProduct: () => void;
};

const ButtonDelete: FC<ProductProps> = ({
  product,
  requiredQuantity,
  onDeleteProduct,
}) => {
  const handleDelete = () => {
    onDeleteProduct();
  };

  return (
    <Box>
      <Missing product={product} requiredQuantity={requiredQuantity} />
      <button onClick={handleDelete}>Remove from Cart</button>
    </Box>
  );
};

export default ButtonDelete;
