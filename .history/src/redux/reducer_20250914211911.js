const saveTask = localStorage.getItem("tasks");
const initialStore = {
  tasks: saveTask ? JSON.parse(saveTask) : [{ id: 1 }],
};

export const reducer = () => {};
