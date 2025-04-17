const App = () => {
  const [value, setValue] = React.useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};