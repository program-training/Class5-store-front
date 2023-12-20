// import { useNavigate } from "react-router-dom";
import { Avatar, Box } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
const ShowOrdersHistory = () => {
  // const navigate = useNavigate();
  const { decodedToken } = useAppSelector((store) => store.token);
  const { token } = useAppSelector((store) => store.users);
  if (!token) return;
  // const userId = decodedToken && decodedToken._id;

  const stringToColor = (string: string) => {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  const stringAvatar = (email: string) => {
    return {
      sx: {
        bgcolor: stringToColor(email),
      },
      children: `${email.split(" ")[0][0]}`,
    };
  };

  return (
    <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
      <>
        <Avatar
          {...stringAvatar(
            decodedToken ? decodedToken && decodedToken.email : ""
          )}
        />

        {/* <Button
          color="inherit"
          onClick={() => navigate(`/store/order-details/${userId}`)}
          sx={{ ml: "5px", mr: "5px" }}
        >
          Show order history
        </Button> */}
      </>
    </Box>
  );
};

export default ShowOrdersHistory;
