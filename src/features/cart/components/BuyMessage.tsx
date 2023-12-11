import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setOpen } from "../cartSlice";

const BuyMessage = () => {
  const open = useAppSelector((state) => state.cart.openMessage);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setOpen(false));
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        {"Your purchase has been made successfully!"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>ok</Button>
      </DialogActions>
    </Dialog>
  );
};
export default BuyMessage;
