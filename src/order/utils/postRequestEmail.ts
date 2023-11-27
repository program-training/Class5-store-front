import axios from "axios";

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
