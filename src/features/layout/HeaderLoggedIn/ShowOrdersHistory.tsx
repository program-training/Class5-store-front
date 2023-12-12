import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
const ShowOrdersHistory = () => {
  const navigate = useNavigate();
  const { decodedToken } = useAppSelector((store) => store.token);
  const { token } = useAppSelector((store) => store.users);
  if (!token) return;
  const userId = decodedToken && decodedToken._id;
  return (
    <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
      <>
        <Typography sx={{ mt: "5px" }}>
          hello: {decodedToken && decodedToken.email}
        </Typography>

        <Typography ml="5px" mt={"5px"}>
          Admin
        </Typography>

        <Button
          color="inherit"
          onClick={() => navigate(`/store/order-details/${userId}`)}
          sx={{ ml: "5px", mr: "5px" }}
        >
          Show order history
        </Button>
      </>
    </Box>
  );
};

export default ShowOrdersHistory;
