import { FC, Fragment } from "react";
import { Box, Button, Typography } from "@mui/material";
import Missing from "../MissingProduct";
import { NotInStock } from "../../../order/types/types";
import CloseModalIcon from "../../layout/war/CloseIcon";
import { localCheckCartType } from "../types/types";

type CheckExistProps = {
  products: NotInStock[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setLocalCheck: React.Dispatch<
    React.SetStateAction<localCheckCartType | null>
  >;
};

const CheckExist: FC<CheckExistProps> = ({
  products,
  setModal,
  setLocalCheck,
}) => {
  const onSubmit = (i: number) => {
    setLocalCheck((prev) => {
      prev?.notInStock.splice(i, 1);
      return prev;
    });
  };

  return (
    <Box>
      <Box>
        <CloseModalIcon setModal={setModal} />
      </Box>
      <Typography variant="h6" fontSize={18}>
        Dear customer, some of the products in your cart are no longer in stock,
        we apologize for the inconvenience, the price of the cart has been
        updated according to the existing products
      </Typography>
      <Box>
        {products.map((product, i) => (
          <Box key={i} display="flex">
            <Missing product={product} />
            <Button onClick={() => onSubmit(i)}>lll</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CheckExist;
