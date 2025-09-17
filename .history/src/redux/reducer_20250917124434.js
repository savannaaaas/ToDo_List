import { createSlice } from "@reduxjs/toolkit";

const initialStore = {
  tasks: [],
  editTaskId: null,
  text: "",
  filterTask: "all",
};

export const reducerTasks = createSlice({});
