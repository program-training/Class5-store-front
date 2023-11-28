import { Box, Fab } from "@mui/material";
import { addOne, subOne, removeItem } from "../cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { PropProductInCart } from "../../../order/types/types";
const ProductCartButton = ({ productCart }: PropProductInCart) => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        size="small"
        color="success"
        onClick={() => dispatch(addOne(productCart.product.id))}
      >
        <AddIcon />
      </Fab>
      <Fab
        size="small"
        color="success"
        disabled={productCart.requiredQuantity === 1 ? true : false}
        onClick={() => dispatch(subOne(productCart.product.id))}
      >
        <RemoveIcon />
      </Fab>
      <Fab
        size="small"
        color="success"
        onClick={() => dispatch(removeItem(productCart.product.id))}
      >
        <DeleteIcon />
      </Fab>
    </Box>
  );
};

export default ProductCartButton;
