export const add = (data) => {
  return {
    type: "add",
    payload: data,
  };
};

export const deleteTasks = () => {
  return {
    type: "deleteTasks",
  };
};

export const changeChecked = (id) => {
  return {
    type: "changeChecked",
    payload: id,
  };
};
