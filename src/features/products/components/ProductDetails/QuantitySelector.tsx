import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

interface QuantitySelectorProps {
  value: number;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
        Quantity
      </Typography>
      <TextField
        select
        label="Quantity"
        value={value}
        onChange={onChange}
        sx={{ width: "100%", marginTop: 1 }}
      >
        {[1, 2, 3, 4, 5].map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default QuantitySelector;
