import { createSlice } from "@reduxjs/toolkit";

const initialStore = {
  tasks: [],
  editTaskId: null,
  text: "",
  filterTask: "all",
};

export const reducerTasks = createSlice({
  name: "task",
  initialStore,
  reducers:{
   add:
//       return {
//         ...store,
//         tasks: [
//           ...store.tasks,
//           {
//             id: crypto.randomUUID(),
//             title: action.payload.title,
//             isDone: false,
//             date: new Date(),
//           },
//         ],
//       };
//     }

//     case "deleteTasks":
//       return {
//         ...store,
//         tasks: store.tasks.filter((task) => !task.isDone),
//       };

//     case "changeChecked":
//       return {
//         ...store,
//         tasks: store.tasks.map((task) =>
//           task.id === action.payload ? { ...task, isDone: !task.isDone } : task
//         ),
//       };

//     case "deleteTask":
//       return {
//         ...store,
//         tasks: store.tasks.filter((task) => task.id !== action.payload),
//       };

//     case "startEditTask":
//       return {
//         ...store,
//         text: action.payload.title,
//         editTaskId: action.payload.id,
//       };

//     case "editTask":
//       return {
//         ...store,
//         text: action.payload,
//       };

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

//     default:
//       return store;
//   }
// };

  
});
