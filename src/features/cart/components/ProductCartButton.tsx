import { Box, Fab } from "@mui/material";
import {
  setQuantityPlus,
  setQuantityMinus,
  deleteProductFromCart,
} from "../cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { PropProductInCart } from "../types/productInCart";

const ProductCartButton = ({ productCart }: PropProductInCart) => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        size="small"
        color="inherit"
        onClick={() => dispatch(setQuantityPlus(productCart.product.title))}
      >
        <AddIcon />
      </Fab>
      <Fab
        size="small"
        color="inherit"
        disabled={productCart.quantity === 1 ? true : false}
        onClick={() => dispatch(setQuantityMinus(productCart.product.title))}
      >
        <RemoveIcon />
      </Fab>
      <Fab
        size="small"
        color="inherit"
        onClick={() =>
          dispatch(deleteProductFromCart(productCart.product.title))
        }
      >
        <DeleteIcon />
      </Fab>
    </Box>
  );
};

export default ProductCartButton;
