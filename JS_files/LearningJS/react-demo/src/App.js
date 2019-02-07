import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Learn react',
      newTodo: '',
      todos: [{
        title: 'Lean Java',
        done: false
      },
      {
        title: 'Learn C++',
        done: false
      }
      ]
    }
  }
  newTodoChange(e) {
    this.setState({
      newTodo: e.target.value
    })
  }
  formSubmitted(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }
      ]
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={(e) => this.formSubmitted(e)}>
          <label htmlFor='newTodo'>New Todo </label><br></br>
          <input class="form-control mr-sm-2" onChange={(e) => this.newTodoChange(e)} type='text' name='todo'></input>
          <br></br>
          <br></br>
          <button type='submit' class="btn btn-primary btn-lg btn-block">Add</button>
        </form>
        <ul>
          {this.state.todos.map(t => {
            return <li key={t.title}> {t.title}</li>
          })}
        </ul>
      </div>
    );
  }
}
export default App;