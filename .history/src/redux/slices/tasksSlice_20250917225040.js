import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  editTaskId: null,
  text: "",
  filterTask: "all",
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      state.tasks.push({
        id: crypto.randomUUID(),
        title: action.payload.title,
        isDone: false,
        date: new Date().toISOString(),
      });
    },
    deleteTasks: (state) => {
      state.tasks = state.tasks.filter((task) => !task.isDone);
    },
    changeChecked: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    startEditTasks: (state, action) => {
      state.editTaskId = action.payload.id;
      state.text = action.payload.title;
    },

    editTasks: (state, action) => {
      state.text = action.payload;
    },

    saveTask: (state) => {
      state = {
        tasks: state.tasks.map((task) =>
          task.id === state.editTaskId ? { ...task, title: state.text } : task
        ),
        editTaskId: null,
        text: "",
      };
    },
    filterTasks: (state, action) => {
      state.filterTask = action.payload;
    },
  },
});

export const {
  add,
  deleteTasks,
  changeChecked,
  deleteTask,
  startEditTasks,
  editTasks,
  saveTask,
  filterTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
