export interface ShippingDetailsInterface {
  address: string;
  contactNumber: string;
  orderType: "standard" | "express" | "pickup";
}
