import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=100")
      .then((response) => response.json())
      .then((json) => {
        console.log("success");
        setData(json.results);
      });
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100vw",
              justifyContent: "center",
            }}
          >
            <div className="card" style={{width:"80%"}}>
              <h2>{item.category}</h2>
              <h3>{item.question}</h3>

              <div className="answers">
                {incorrect_answers?.map((answer) => {
                  return <div>{answer}</div>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// import React, { Component } from "react";
// import "./App.css";

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: false, msg: null };
//   }

//   load() {
//     this.setState({ loading: true });
//     fetch("https://opentdb.com/api.php?amount=100")
//       .then((response) => response.json())
//       .then((json) => this.setState({ loading: false, msg: json.results }));
//   }

//   componentDidMount() {
//     // make fetch request
//     this.load();
//     console.log(this.state);
//   }

//   /*componentWillUnmount() {
//   this.handleClick()
//     // make fetch request
// }*/

//   render() {
//     const { loading, msg } = this.state;

//     return (
//       <>
//         {console.log(loading)}
//         {console.log(msg)}
//         <div>
//           {msg ? (
//             msg.map((item) => {
//               return (
//                 <div>
//                   <span>{item.category}</span>
//                   <span>{item.question}</span>
//                   <span>{item.difficulty}</span>
//                   <span>{item.category}</span>
//                   <span>{item.category}</span>
//                 </div>
//               );
//             })
//           ) : (
//             <>loading</>
//           )}
//         </div>
//       </>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <LambdaDemo />
//       </div>
//     );
//   }
// }

// export default App;
