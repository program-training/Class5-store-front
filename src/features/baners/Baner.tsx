import { Box } from "@mui/material";
import { FC } from "react";

type BannerProps = {
    id: string
}
const Banner:FC<BannerProps> = ({id}) => {
  return <>
  <Box component="iframe" src={`https://sparkly-souffle-e37dff.netlify.app/banners/products/sd`}/>
  {id}
  </>;
};

export default Banner;