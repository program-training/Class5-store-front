import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
const OrderOptions: React.FC = () => {
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryOption(event.target.value);
  };
  return (
    <>
      <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
        Order Options
      </Typography>
      <TextField
        select
        label="Delivery Option"
        value={deliveryOption}
        onChange={handleChange}
        sx={{ width: "100%", marginTop: 1 }}
      >
        <MenuItem value="standard">Standard Delivery</MenuItem>
        <MenuItem value="express">Express Delivery</MenuItem>
      </TextField>
    </>
  );
};
export default OrderOptions;
