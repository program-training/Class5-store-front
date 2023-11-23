import { Box } from "@mui/material";
import { FC } from "react";

type BannerProps = {
    id: string
}
const Banner:FC<BannerProps> = ({id}) => {
  return <>
  <Box component="iframe" src={`http://demo/${id}`}/>
  </>;
};

export default Banner;