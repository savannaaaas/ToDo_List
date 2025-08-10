export const Task = ({ item }) => {
  return (
    <>
      <p>{item.title}</p>
      <p>{item.isDone}</p>
    </>
  );
};
