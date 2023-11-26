import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { AppBar, DialogContent, IconButton, Toolbar } from "@mui/material";
import InputDelivery from "./InputDelivery";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

const DeliveryFrom: FC<SimpleDialogProps> = ({ onClose, open }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <AppBar sx={{ position: "relative", color: "Gray" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="default"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogTitle
        sx={{ display: "flex", justifyContent: "center", weight: "900" }}
      >
        Your Details
      </DialogTitle>
      <DialogContent>
        <InputDelivery onBuyClick={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryFrom;
