class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: true };
  }
  toggle = () => {
    this.setState(state => ({ on: !state.on }));
  };
  render() {
    return <button onClick={this.toggle}>{this.state.on ? "ON" : "OFF"}</button>;
  }
}