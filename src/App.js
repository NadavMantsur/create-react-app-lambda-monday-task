import React, { Component } from "react";
import "./App.css";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick() {
    this.setState({ loading: true });
    fetch("https://opentdb.com/api.php?amount=100")
      .then((response) => response.json())
      .then((json) => this.setState({ loading: true, msg: json.results }));
  }

  componentDidMount() {
    // make fetch request
    this.handleClick();
    console.log(this.state);
  }

  /*componentWillUnmount() {
  this.handleClick()
    // make fetch request
}*/

  render() {
    const { loading, msg } = this.state;

    return (
      <>
        {console.log(loading)}
        {console.log(msg)}
        <div>
          {msg ? (
            sg.map((item) => {
              return (
                <div>
                  <span>{item.category}</span>
                  <span>{item.question}</span>
                  <span>{item.difficulty}</span>
                  <span>{item.category}</span>
                  <span>{item.category}</span>
                </div>
              );
            })
          ) : (
            <>loading</>
          )}
        </div>
      </>
    );
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
