class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert("Bound click!");
  }
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}