<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { Box, Typography } from "@mui/material";
import { OrdersInterface } from "../../../order/interfaces/OrdersInterfaces";
import { useQuery } from "@apollo/client";
import { QUERY_ORDERS } from "../../../services/apollo/queries";

const OrderDetails = () => {
  const { userId } = useParams();
  const [orders, setOrders] = useState<OrdersInterface[] | []>([]);
  const { data } = useQuery(QUERY_ORDERS, { variables: { id: userId } });
  useEffect(() => {
    const getOrder = async () => {
      try {
        data && setOrders(data.getOrder as OrdersInterface[]);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, [userId]);
  if (!orders.length)
    return (
      <Box mt={"100px"}>
        <Typography>sorry there is nothing to show</Typography>{" "}
      </Box>
    );
  return (
    <Box mt={"100px"}>
      <Box>
        {orders.map((order) => (
          <Box key={order._id}>
            <Typography>
              order time {order.orderTime.toLocaleString()}
            </Typography>
            <Typography>status order {order.status}</Typography>
            {order.cartItems.map((product) => (
              <ProductDetails product={product} key={product.productId} />
            ))}
            <Typography>total price{order.price}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OrderDetails;
=======
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { Box, Typography } from "@mui/material";
import { BASE_URL } from "../../../App";
import { OrdersInterface } from "../../../order/interfaces/OrdersInterfaces";

const OrderDetails = () => {
  const { userId } = useParams();
  const [orders, setOrders] = useState<OrdersInterface[] | []>([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/orders/${userId}`);
        setOrders(data as OrdersInterface[]);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, [userId]);
  if (!orders.length)
    return (
      <Box mt={"100px"}>
        <Typography>sorry there is nothing to show</Typography>{" "}
      </Box>
    );
  return (
    <Box mt={"100px"}>
      <Box>
        {orders.map((order) => (
          <Box key={order._id}>
            <Typography>
              order time {order.orderTime.toLocaleString()}
            </Typography>
            <Typography>status order {order.status}</Typography>
            {order.cartItems.map((product) => (
              <ProductDetails product={product} key={product.productId} />
            ))}
            <Typography>total price{order.price}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OrderDetails;
>>>>>>> acc98a17e7c3d9fdbc16a561a0b091def3e2d3d8
