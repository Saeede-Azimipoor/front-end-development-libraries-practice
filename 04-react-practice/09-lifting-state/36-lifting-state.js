function Parent() {
  const [message, setMessage] = React.useState("");

  return (
    <div>
      <Child onSend={setMessage} />
      <p>Message from child: {message}</p>
    </div>
  );
}

function Child({ onSend }) {
  return (
    <button onClick={() => onSend("Hello from child!")}>
      Send Message
    </button>
  );
}