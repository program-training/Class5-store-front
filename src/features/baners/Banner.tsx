import React from "react"
import { Box } from "@mui/material";
const Banner = () => {
  return (
    <React.Fragment>
      <Box
        sx={{ width: "185px", height: "370px" }}
        component="iframe"
        src={`https://sparkly-souffle-e37dff.netlify.app/banners/products/sd`}
      />
    </React.Fragment>
  );
};

export default Banner;