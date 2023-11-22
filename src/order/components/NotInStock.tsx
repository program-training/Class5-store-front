import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useNavigate } from "react-router-dom";

const NotInStock = () => {
  const [open, setOpen] = React.useState(false);
  // const [renderComponent, setRenderComponent] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };
  const handleToPayment = () => {
    setOpen(false);
    navigate("/payment");
  };
  const handleBackToHome = () => {
    setOpen(false);
    navigate("/home");
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Dear customer, some of the products in your cart are no longer in
            stock, we apologize for the inconvenience, the price of the cart has
            been updated according to the existing products
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBackToHome}>Back to store</Button>
          <Button onClick={handleToPayment} autoFocus>
            continue to payment
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default NotInStock;
