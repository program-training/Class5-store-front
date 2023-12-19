import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { GetAllUsers } from "../form/services/usersRequests";

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
  const { users } = useAppSelector((store) => store.users);

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [users]);

  const rows = users.map((user) => ({
    id: user._id,
    email: user.email,
    login_count: user.loginCount,
  }));

  return (
    <Box sx={{ height: 371, width: "100%", mt: 15 }}>
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
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
