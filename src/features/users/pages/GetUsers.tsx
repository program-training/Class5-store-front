import axios from "axios";
import { useEffect, useState } from "react";
import UserInterface from "../interfaces/UserInterface";
import { Box, Typography } from "@mui/material";

const GetUsers = () => {
  const PORT = 3000;
  const BASE_URL = "http://localhost:";
  const [users, setUsers] = useState<UserInterface[] | null>(null);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}${PORT}/api/users`);
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers()
  }, []);
  return <Box>
    {users?.map((user) => (<>
    <Typography>
        {user.email}
    </Typography>
    </>))}
  </Box>;
};

export default GetUsers;
