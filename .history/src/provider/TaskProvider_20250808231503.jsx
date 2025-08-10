export const TaskProvider = () => {
  const [task, setTask] = useState(getTask);
  //   useEffect(() => {
  //     document.documentElement.dataset.theme = theme;
  //     localStorage.setItem("theme", theme);
  //   }, [theme]);
  return (
    <TaskContext.Provider value={{ theme, setTheme }}>
      {children}
    </TaskContext.Provider>
  );
};
