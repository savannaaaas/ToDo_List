const saveTask = localStorage.getItem("tasks");
const initialStore = {
  tasks: saveTask
    ? JSON.parse(saveTask)
    : [{ id: 1, title: "Anna", isDone: false }],
};

export const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case "add": {
      return { ...store, tasks: [...store.tasks, {
      id: crypto.randomUUID(),
      title: data.title,
      isDone: data.isDone,
      date: new Date(),
    

    
    }
    default:
      return store;
  }
};
