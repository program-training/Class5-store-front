import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useState } from "react";
import DeliveryFrom from "../../Deliveryform/components/DeliveryFrom";
import { useAppSelector } from "../../../store/hooks";
import {
  getProductInStockAndNotInStock,
  productToCheck,
} from "../../Deliveryform/helpers/helpers/prefixs";
import NotInStock from "../../../order/components/NotInStock";

const Checkout = () => {
  const [openDeliveryFrom, setOpenDeliveryFrom] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);

  const cart = useAppSelector((state) => state.cart.cart);
  const productsToCheck: productToCheck[] = cart.map((item) => ({
    requiredQuantity: item.amount,
    productId: item.product.id,
  }));
  const productsInCart = cart.map((item) => item.product);

  const onClick = () => {
    const { notInStock } = getProductInStockAndNotInStock(
      productsInCart,
      productsToCheck
    );
    if (notInStock.length) {
      setOpenCheckout(true);
    } else {
      setOpenDeliveryFrom(true);
    }
  };

  // const handleClickOpenDeliveryFrom = () => {
  //   setOpenDeliveryFrom(true);
  // };

  // const handleClickOpenCheckout = () => {
  //   setOpenCheckout(true);
  // };

  const handleCloseDeliveryFrom = () => {
    setOpenDeliveryFrom(false);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
  };

  return (
    <>
      <Button fullWidth variant="contained" sx={{ mb: 1 }} onClick={onClick}>
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
      </Button>
      <NotInStock open={openCheckout} onClose={handleCloseCheckout} />
      <DeliveryFrom open={openDeliveryFrom} onClose={handleCloseDeliveryFrom} />
    </>
  );
};

export default Checkout;

// import { Button } from "@mui/material";
// import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
// import { useState } from "react";
// import DeliveryFrom from "../../Deliveryform/components/DeliveryFrom";
// import { useAppSelector } from "../../../store/hooks";
// import {
//   getProductInStockAndNotInStock,
//   productToCheck,
// } from "../../Deliveryform/helpers/helpers/prefixs";
// import NotInStock from "../../../order/components/NotInStock";

// const Checkout = () => {
//   const [openDeliveryFrom, setOpenDeliveryFrom] = useState(false);
//   const [openCheckout, setOpenCheckout] = useState(false);

//   const cart = useAppSelector((state) => state.cart.cart);
//   const productsToCheck: productToCheck[] = cart.map((item) => {
//     return { requiredQuantity: item.amount, productId: item.product.id };
//   });
//   const productsInCart = cart.map((item) => item.product);

//   const onClick = () => {
//     const { inStock, notInStock } = getProductInStockAndNotInStock(
//       productsInCart,
//       productsToCheck
//     );
//     if (notInStock.length) {
//       setOpenCheckout(true);
//     } else {
//       setOpenCheckout(false);
//     }
//   };

//   const handleClickOpenDeliveryFrom = () => {
//     setOpenDeliveryFrom(true);
//   };
//   const handleClickOpenCheckout = () => {
//     openCheckout(true);
//   };

//   const handleCloseDeliveryFrom = () => {
//     setOpenDeliveryFrom(false);
//   };
//   const handleCloseCheckout = () => {
//     openCheckout(false);
//   };

//   return (
//     <>
//       <Button
//         fullWidth
//         variant="contained"
//         sx={{ mb: 1 }}
//         onClick={handleClickOpenCheckout}
//         onClick={handleClickOpenDeliveryFrom}
//       >
//         <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
//       </Button>
//       <NotInStock open={openCheckout} onClose={handleCloseCheckout} />
//       <DeliveryFrom open={openDeliveryFrom} onClose={handleCloseDeliveryFrom} />
//     </>
//   );
// };
// export default Checkout;
