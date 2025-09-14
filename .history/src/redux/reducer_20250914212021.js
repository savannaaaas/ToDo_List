const saveTask = localStorage.getItem("tasks");
const initialStore = {
  tasks: saveTask
    ? JSON.parse(saveTask)
    : [{ id: 1, title: "Anna", isDone: false }],
};

export const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case "add": {
      return;
    }
    default:
      return store;
  }
};
