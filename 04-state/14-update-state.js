const App = () => {
  const [text, setText] = React.useState("");
  return (
    <input value={text} onChange={(e) => setText(e.target.value)} />
  );
};