import { createSlice } from "@reduxjs/toolkit";

const initialStore = {
  tasks: [],
  editTaskId: null,
  text: "",
  filterTask: "all",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialStore,
  reducers: {
    add: (state, action) => {
      state.tasks.push({
        id: crypto.randomUUID(),
        title: action.payload.title,
        isDone: false,
        date: new Date(),
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
      state = {
        ...state,
        text: action.payload.title,
        editTaskId: action.payload.id,
      };
    },

    editTasks: (state, action) => {
      state = {
        ...state,
        text: action.payload,
      };
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
    filterTask: (state, action) => {
      state = { ...state, filterTask: action.payload };
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
  filterTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
