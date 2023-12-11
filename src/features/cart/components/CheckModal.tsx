import { FC, useEffect, useState } from "react";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import Missing from "../MissingProduct";
import { NotInStockApterSub } from "../../../order/types/types";
import CloseModalIcon from "../../layout/war/CloseIcon";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { removeItem } from "../cartSlice";
import cancelProductsInOrder from "../services/cancelProductsInOrder";

type CheckExistProps = {
  products: NotInStockApterSub[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckExist: FC<CheckExistProps> = ({ products, setModal }) => {
  const [productsC, setProductsC] = useState<NotInStockApterSub[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setProductsC(products);
  }, [products]);

  const { error } = useAppSelector((store) => store.cart);

  const handleCart = (product: NotInStockApterSub) => {
    const newP = [...productsC];
    const filtered = newP.filter(
      (item) => item.product.id !== product.product.id
    );
    setProductsC(filtered);
    if (!filtered.length) setModal(false);
  };

  const handleCartDeleteItem = async (product: NotInStockApterSub) => {
    dispatch(removeItem(product.product.id));
    const newP = [...productsC];
    const filtered = newP.filter(
      (item) => item.product.id !== product.product.id
    );

    dispatch(
      cancelProductsInOrder({
        productId: product.product.id,
        requiredQuantity: product.exist,
      })
    );
    if (error) console.error("Error while canceling product:", error);

    setProductsC(filtered);
    if (!filtered.length) setModal(false);
  };

  return (
    <Box>
      <CssBaseline />
      <Box>
        <CloseModalIcon setModal={setModal} />
      </Box>
      <Typography variant="h6" fontSize={15} color="black">
        Dear customer, some of the products in your cart are no longer in stock,
        we apologize for the inconvenience, the price of the cart has been
        updated according to the existing products
      </Typography>
      <Box>
        {productsC.map((product, i) => (
          <Box key={i} display="flex">
            <Missing product={product} />
            <Box>
              <Button
                onClick={() => handleCartDeleteItem(product)}
                color="warning"
              >
                I don't want the rest
              </Button>
              <Button onClick={() => handleCart(product)} color="success">
                Okay, what's left is good for me
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CheckExist;
