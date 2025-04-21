class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    return <input onChange={this.handleChange} value={this.state.input} />;
  }
}