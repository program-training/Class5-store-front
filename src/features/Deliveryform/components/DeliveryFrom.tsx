import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import InputDelivery from "./InputDelivery";
import { FC } from "react";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  sum: number
}

const DeliveryFrom: FC<SimpleDialogProps> = ({ onClose, open, sum }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Your Details</DialogTitle>
      <DialogContent>
        <InputDelivery onBuyClick={onClose} sum={sum}/>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default DeliveryFrom;
