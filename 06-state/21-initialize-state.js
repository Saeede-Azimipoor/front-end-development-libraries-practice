class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
  }
  render() {
    return <p>{this.state.message}</p>;
  }
}