const App = () => {
  const [on, setOn] = React.useState(false);
  return <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>;
};