class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Saeede" };
  }
  render() {
    return <h1>{this.state.name}</h1>;
  }
}