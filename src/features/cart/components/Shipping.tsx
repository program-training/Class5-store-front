import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useEffect } from "react";
// import { ShippingType, ShippingTypes } from "../types/types";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setShippingDetails } from "../../../order/orderSlice";

export default function Shipping() {
  const typeOrder = useAppSelector((state) => state.order.orderType);
  const dispatch = useAppDispatch();
  // dispatch(setShippingDetails("standard"));
  const handleChange = (e) => {
    // const shippingDetails = (event.target as HTMLInputElement)
    //   .value as ShippingType;
    // onPick(shippingDetails);
    dispatch(setShippingDetails(e.target.value));
  };
  useEffect(() => {
    console.log("aaa", typeOrder);
  }, [typeOrder]);

  return (
    <FormControl sx={{ margin: 1 }}>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Shipping options
      </FormLabel>
      <RadioGroup
        value={typeOrder}
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
