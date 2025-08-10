export const TaskProvider = () => {
  const [task, setTask] = useState(getTheme);
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
