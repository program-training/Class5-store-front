import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import InputDelivery from "./InputDelivery";
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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Your Details</DialogTitle>
      <DialogContent>
        <InputDelivery onBuyClick={onClose} />
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default DeliveryFrom;
