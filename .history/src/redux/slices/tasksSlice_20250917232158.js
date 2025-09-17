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
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
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
      state.tasks = state.tasks.map((task) =>
        task.id === state.editTaskId ? { ...task, title: state.text } : task
      );
      state.editTaskId = null;
      state.text = "";
    },

    filterTasks: (state, action) => {
      state.filterTask = action.payload;
    },
  },
  selectors: {
    selectTasks: (state) => state.tasks,
    selectFilter: (state) => state.filterTask,
    selectText: (state) => state.text,
    selectEditTaskId: (state) => state.editTaskId,
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

export const { selectTasks, selectFilter, selectEditTaskId, selectText } =
  tasksSlice.selectors;
