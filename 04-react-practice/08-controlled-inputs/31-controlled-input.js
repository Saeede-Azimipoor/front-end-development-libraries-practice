const ControlledInput = () => {
  const [input, setInput] = React.useState("");
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>{input}</p>
    </div>
  );
};