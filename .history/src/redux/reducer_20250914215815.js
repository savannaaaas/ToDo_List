const saveTask = localStorage.getItem("tasks");
const initialStore = {
  tasks: saveTask
    ? JSON.parse(saveTask)
    : [{ id: 1, title: "Anna", isDone: false }],
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
            title: action.payload,
            isDone: false,
            date: new Date(),
          },
        ],
      };
      case "deleteTasks":{return {
            ...store,
            tasks: store.tasks
        }}
        
    };
    default:
      return store;
  }
};
