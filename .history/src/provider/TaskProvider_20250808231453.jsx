export const TaskProvider = () => {
  const [task, setTask] = useState(getTask);
  //   useEffect(() => {
  //     document.documentElement.dataset.theme = theme;
  //     localStorage.setItem("theme", theme);
  //   }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
