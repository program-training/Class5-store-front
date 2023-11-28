import React, { FC } from "react";
import { Box } from "@mui/material";

type BannerProps = {
  id: number;
};
const Banner: FC<BannerProps> = ({ id }) => {
  return (
    <React.Fragment>
      <Box
        sx={{ width: "185px", height: "370px" }}
        component="iframe"
        src={`https://sparkly-souffle-e37dff.netlify.app/banners/vertical/products/${id}`}
      />
    </React.Fragment>
  );
};

export default Banner;
