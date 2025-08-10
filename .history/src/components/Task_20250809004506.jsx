import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
];
export const Task = ({ task }) => {
  const rows = [
    {
      id: task.id,
      title: task.title,
    },
  ];

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} sx={{ border: 0 }} />
    </Paper>
  );
};
