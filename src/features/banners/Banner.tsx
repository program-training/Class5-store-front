import React, { FC } from "react";
import { Box } from "@mui/material";
import { BNR_URL } from "../../App";


type BannerProps = {
  id: number;
};
const Banner: FC<BannerProps> = ({ id }) => {
  return (
    <React.Fragment>
      <Box
        component="img"
        src="https://cdn.pixabay.com/animation/2023/10/10/13/26/13-26-26-701_512.gif"
        position="absolute"
        top="50%"
        left={0}
        width="85px"
        height="85px"
      />
      <Box
        sx={{ width: "185px", height: "370px" }}
        component="iframe"
        src={`${BNR_URL}/banners/vertical/products/${id}`}
      />
    </React.Fragment>
  );
};

export default Banner;
