class App extends React.Component {
  handleClick = () => {
    console.log(this);
  };
  render() {
    return <button onClick={this.handleClick}>Test This</button>;
  }
}