import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { Box, Typography } from "@mui/material";
import { BASE_URL } from "../../../App";
import { OrdersInterface } from "../../../order/interfaces/OrdersInterfaces";

const OrderDetails = () => {
  const { userId } = useParams();
  const [order, setOrder] = useState<OrdersInterface[] | []>([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/orders/${userId}`);
        console.log(data);

        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, [userId]);
  if (!order.length)
    return (
      <Box mt={"100px"}>
        <Typography>sorry there is nothing to show</Typography>{" "}
      </Box>
    );
  return (
    <Box mt={"100px"}>
      <Box>
        {order.map((order) => {
          const date = new Date(order.orderTime).toLocaleString();
          return (
            <>
              <Typography>order time {date}</Typography>
              <Typography>status order {order.status}</Typography>
              {order.cartItems.map((product) => (
                <ProductDetails product={product} />
              ))}
              <Typography>total price{order.price}</Typography>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default OrderDetails;
