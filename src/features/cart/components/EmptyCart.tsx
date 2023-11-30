import { Box, Typography } from "@mui/material";
const EmptyCart = () => {
  return (
    <Box role="presentation">
      <Typography
        variant="h6"
        align="center"
        sx={{
          fontWeight: "bold",
          color: "",
          mb: 4,
        }}
      >
        Your Cart is Empty
        <Box
          sx={{
            width: 260,
            height: 260,
            backgroundImage: `url("https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png")`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            mb: 4,
          }}
        />
      </Typography>
    </Box>
  );
};

export default EmptyCart;
