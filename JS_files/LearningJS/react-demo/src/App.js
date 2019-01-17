import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        Title: "Write the source code",
        Completed: false
      },
      {
        id: 2,
        Title: "Compile the code to machine code",
        Completed: false
      },
      {
        id: 3,
        Title: "Run the application",
        Completed: false
      }
    ]
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
