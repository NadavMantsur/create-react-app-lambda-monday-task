import React, { Component } from "react";
import "./App.css";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = () => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("https://opentdb.com/api.php?amount=100")
      .then((response) => response.json())
      .then((json) => this.setState({ loading: true, msg: json.results }));
  
  };

  componentDidMount() {
    // make fetch request
    this.handleClick()
    console.log(this.state)
}

componentWillUnmount() {
    // make fetch request
}

  
  render() {
    // const { loading, msg } = this.state;

    return <>
    {  console.log(this.state)}
    <button onClick={()=>this.handleClick()} > Fetch</button>
    {/* {loading && <span>{msg}</span>} */}
    </>;
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <LambdaDemo />
      </div>
    );
  }
}

export default App;
