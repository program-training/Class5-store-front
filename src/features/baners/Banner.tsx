import { Box } from "@mui/material";
const Banner = () => {
  return (
    <>
      <Box
        sx={{ width: "185px", height: "370px" }}
        component="iframe"
        src={`https://sparkly-souffle-e37dff.netlify.app/banners/products/sd`}
      />
    </>
  );
};

export default Banner;
