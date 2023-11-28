export interface ShippingDetailsInterface {
  address: string;
  contactNumber: string;
  userId: string;
  orderType: "standard" | "express" | "pickup";
}
