import { FC, useEffect, useState } from "react";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import Missing from "../MissingProduct";
import { NotInStock } from "../../../order/types/types";
import CloseModalIcon from "../../layout/war/CloseIcon";

type CheckExistProps = {
  products: NotInStock[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckExist: FC<CheckExistProps> = ({ products, setModal }) => {
  const [productsC, setProductsC] = useState<NotInStock[]>([]);

  useEffect(() => {
    setProductsC(products);
  }, []);

  const handleCart = (product: NotInStock) => {
    const newP = [...productsC];
    const filtered = newP.filter(
      (item) => item.product.id !== product.product.id
    );
    setProductsC(filtered);
    if (!filtered.length) setModal(false);
  };

  return (
    <Box>
      <CssBaseline />
      <Box>
        <CloseModalIcon setModal={setModal} />
      </Box>
      <Typography variant="h6" fontSize={18}>
        Dear customer, some of the products in your cart are no longer in stock,
        we apologize for the inconvenience, the price of the cart has been
        updated according to the existing products
      </Typography>
      <Box>
        {productsC.map((product, i) => (
          <Box key={i} display="flex">
            <Missing product={product} />
            <Button onClick={() => handleCart(product)}>
              click to confirm
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CheckExist;
