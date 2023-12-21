import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { GetAllUsers } from "../form/services/usersRequests";
import { useSubscription } from "@apollo/client";
import { USERS_SUBSCRIPTION } from "../../services/apollo/subscriptions";
import { addUser } from "../users/usersSlice";
import SpinnerComponent from "../form/components/WaitingComponent";
import NotFoundPage from "../layout/NotFoundPage/NotFoundPage";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: true,
  },
  {
    field: "login_count",
    headerName: "Login count",
    type: "number",
    width: 250,
    editable: true,
  },
];

export default function UsersGrid() {
  const dispatch = useAppDispatch();
  const { error, pending, users } = useAppSelector((store) => store.users);
  const { data } = useSubscription(USERS_SUBSCRIPTION);
  const { themeMode } = useAppSelector((store) => store.themeMode);

  useEffect(() => {
    dispatch(GetAllUsers());
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(addUser(data.userRegister));
      console.log("Updated data:");
    }
  }, [data]);

  const rows = users.map((user) => ({
    id: user._id,
    email: user.email,
    login_count: user.loginCount,
  }));

  if (pending) return <SpinnerComponent />;
  if (error) return <NotFoundPage />;

  return (
    <Box
      sx={{
        height: "75.5%",
        width: "100%",
        mt: 15,
        display: "flex",
        flexDirection: "column",
        backgroundColor: !themeMode ? "#2a2a2b" : "white",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        sx={{ height: "100%", width: "100%" }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
