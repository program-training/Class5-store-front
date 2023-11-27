import axios from "axios";
import { productToCheck } from "../types/productToCheck";

export const sendEmail = async (email: string) => {
  try {
    const { data } = await axios.post("http://localhost:3000/sendEmail", {
      email,
    });
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export const checkProduct = async (product: productToCheck) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/products/", {
      params: product,
    });
    return data;
  } catch (error) {
    console.error("Error checking product:", error);
    throw error;
  }
};
