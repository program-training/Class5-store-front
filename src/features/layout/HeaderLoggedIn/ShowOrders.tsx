import { jwtDecode } from "jwt-decode";
import { TokenType } from "../types/token";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
const ShowOrdersHistory = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) return;
  const decodedToken = jwtDecode(token) as TokenType;
  const userId = decodedToken._id;
  return (
    <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
      <>
        <Typography sx={{ mt: "5px" }}>hello: {decodedToken.email}</Typography>
        {decodedToken.isAdmin && (
          <Typography ml="5px" mt={"5px"}>
            Admin
          </Typography>
        )}
        <Button
          color="inherit"
          onClick={() => navigate(`/store/order-details/${userId}`)}
          sx={{ ml: "5px", mr: "5px" }}
        >
          show order history
        </Button>
      </>
    </Box>
  );
};

export default ShowOrdersHistory;
