import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello from react !'
    };
  }
  formSubmitted(e) {
    e.preventDefault();
    console.log('form submitted');
  }
  changeTodo(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="App">
        <h2>{this.state.message}</h2>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo"> newTodo</label>
          <input onChange={this.changeTodo} type="text" name="todo" />
          <button type="submit">Addtodo</button>
        </form>
      </div>
    );
  }
}
export default App;
