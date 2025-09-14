const saveTask = localStorage.getItem("tasks");
const initialStore = {
  tasks: saveTask
    ? JSON.parse(saveTask)
    : [{ id: 1, title: "Anna", isDone: false }],
  editTaskId: null,
  text: "",
};

export const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case "add": {
      return {
        ...store,
        tasks: [
          ...store.tasks,
          {
            id: crypto.randomUUID(),
            title: action.payload.title,
            isDone: false,
            date: new Date(),
          },
        ],
      };
    }
    case "deleteTasks":
      return {
        ...store,
        tasks: store.tasks.filter((task) => !task.isDone),
      };
    case "changeChecked":
      return {
        ...store,
        tasks: store.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case "deleteTask":
      return {
        ...store,
        tasks: store.tasks.filter((task) => task.id !== action.payload),
      };

    case "startEditTask":
      return {
        ...store,
        text: action.payload.title,
        editTaskId: action.payload.id,
      };

    case "editTask":
      return {
        ...store,
        tasks: store.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: store.editTaskId.newTitle }
            : task
        ),
      };
    case "saveTask":
      return {
        ...store,
        tasks: store.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.newTitle }
            : task
        ),
      };
    default:
      return store;
  }
};
