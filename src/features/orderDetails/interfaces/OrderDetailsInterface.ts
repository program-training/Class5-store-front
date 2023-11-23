import ProductInterface from "../../products/interfaces/ProductInterface";

interface OrderDetailsInterface {
  userId: string;
  id: number;
  products: ProductInterface[];
  status: string;
  email: string;
  price: number;
  orderTime: Date;
  shippingDetails: {
    address: string;
    contactNumber: string;
  };
}
export interface OrderFromClientInterface {
  userId: string;
  products: ProductInterface[];
  email: string;
  price: number;
  shippingDetails: {
    address: string;
    contactNumber: string;
  };
}

export default OrderDetailsInterface;
