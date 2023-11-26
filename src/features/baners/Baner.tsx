import { Box } from "@mui/material";
import { FC } from "react";

type BannerProps = {
  id: string;
};
const Banner: FC<BannerProps> = () => {
  return (
    <>
      <Box
        component="iframe"
        src={`https://sparkly-souffle-e37dff.netlify.app/banners/products/sd`}
      />
    </>
  );
};

export default Banner;
