import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ChangeEvent } from "react";
import { ShippingType, ShippingTypes } from "../types/types";

export default function Shipping({ shipping, onPick }: ShippingTypes) {
  const handleChange = (event: ChangeEvent<HTMLElement>) => {
    const shippingDetails = (event.target as HTMLInputElement)
      .value as ShippingType;
    onPick(shippingDetails);
  };

  return (
    <FormControl sx={{ margin: 1 }}>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Shipping options
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={shipping}
        onChange={handleChange}
        sx={{ color: "white" }}
      >
        <FormControlLabel
          value="standard"
          control={<Radio />}
          label="Standard"
        />
        <FormControlLabel value="express" control={<Radio />} label="Express" />
        <FormControlLabel value="pickup" control={<Radio />} label="Pickup" />
      </RadioGroup>
    </FormControl>
  );
}
