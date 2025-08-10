import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
const paginationModel = { page: 0, pageSize: 5 };

export const Task = ({ task }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 130 },
  ];
  const rows = [
    {
      id: task.id,
      title: task.title,
    },
  ];

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};
