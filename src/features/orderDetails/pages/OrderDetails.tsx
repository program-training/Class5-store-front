import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import OrderDetailsInterface from "../interfaces/OrderDetailsInterface";
import ProductDetails from "../components/ProductDetails";
import { Typography } from "@mui/material";
const OrderDetails = () => {
  const { userId } = useParams();
  const [order, setOrder] = useState<OrderDetailsInterface>();
  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3333/api/orders/${userId}`
        );
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, [userId]);

  return (
    <>
      <Typography>order time {order?.orderTime.toDateString()}</Typography>
      <Typography>status order {order?.status}</Typography>
      {order?.products.map((product) => (
        <ProductDetails product={product} />
      ))}
      <Typography>total price{order?.price}</Typography>
    </>
  );
};

export default OrderDetails;
