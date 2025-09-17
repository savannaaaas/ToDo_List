import { createSlice } from "@reduxjs/toolkit";

const initialStore = {
  tasks: [],
  editTaskId: null,
  text: "",
  filterTask: "all",
};

export const reducerTasks = createSlice({
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
    startEditTask: (state, action) => {
      state = {
        ...state,
        text: action.payload.title,
        editTaskId: action.payload.id,
      };
    },

    editTask: (state, action) => {
      state = {
        ...state,
        text: action.payload,
      };
    },

    saveTask: (state, action) => {},

    //     case "saveTask":
    //       return {
    //         ...store,
    //         tasks: store.tasks.map((task) =>
    //           task.id === store.editTaskId ? { ...task, title: store.text } : task
    //         ),
    //         editTaskId: null,
    //         text: "",
    //       };

    //     case "filterTask": {
    //       return { ...store, filterTask: action.payload };
    //     }
  },
});
