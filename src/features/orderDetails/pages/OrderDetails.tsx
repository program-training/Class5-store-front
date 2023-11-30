import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { Box, Typography } from "@mui/material";
import { BASE_URL } from "../../../App";
import { OrdersInterface } from "../../../order/interfaces/OrdersInterfaces";

const OrderDetails = () => {
  const { userId } = useParams();
  const [order, setOrder] = useState<OrdersInterface | null>(null);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/orders/${userId}`);
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, [userId]);
  return (
    <Box mt={"100px"}>
      {!order ? (
        <Typography>sorry there is nothing to show</Typography>
      ) : (
        <>
          <Typography>order time {order?.orderTime.toDateString()}</Typography>
          <Typography>status order {order?.status}</Typography>
          {order.cartItems.map((product) => (
            <ProductDetails product={product} />
          ))}
          <Typography>total price{order?.price}</Typography>
        </>
      )}
    </Box>
  );
};

export default OrderDetails;
