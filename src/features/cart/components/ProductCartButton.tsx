import { Box, Fab } from "@mui/material";
import { addOne, subOne, removeItem } from "../cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { PropProductInCart } from "../../../order/types/types";
const ProductCartButton = ({ productCart }: PropProductInCart) => {
  console.log(productCart.requiredQuantity);
  console.log(productCart.product.quantity);

  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
      }}
    >
      <Fab
        size="small"
        color="success"
        disabled={
          productCart.requiredQuantity + 1 <= productCart.product.quantity
            ? false
            : true
        }
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
