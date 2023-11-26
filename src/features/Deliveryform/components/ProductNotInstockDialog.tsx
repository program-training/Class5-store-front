import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box, DialogActions, DialogContent } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../../store/hooks";
export type ProductNotInStockProps = {
  productIds: string[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductNotInStock: FC<ProductNotInStockProps> = ({
  productIds,
  open,
  setOpen,
}) => {
  const products = useAppSelector((state) => state.products.products).filter(
    (product) => productIds.includes(product.id)
  );
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Your Details</DialogTitle>
      <DialogContent>
        {products.map((product) => (
          <Box>
            <Box component="img" src={product.imageUrl} />
          </Box>
        ))}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default ProductNotInStock;
