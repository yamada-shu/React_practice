import React, { Component } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import './css/App.css'


class App extends Component {

  constructor() {
    super()
    const todos = []
    this.state = {
      isLoading: false,
      hasError: false,
      todos: todos,
      countTodo: todos.length + 1,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    if (!title) {
      alert("タイトルを入力してください");
      return;
    }
    const desc = e.target.desc.value;
    if (!desc) {
      alert("説明の入力を忘れています");
      return;
    }
    const todos = this.state.todos.slice()
    const countTodo = this.state.countTodo

    if (todos.filter(todo => todo.title === title).length > 0) {
      alert("同じタイトルのtodoがあります");
      return;
    }

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })


    e.target.title.value = '';
    e.target.desc.value = '';
  }

  deleteTodoState(clickTodo) {
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo
    todos.splice(clickTodo.id - 1, 1);
    this.setState({ todos });
    this.setState({ countTodo: countTodo - 1 })
  }

  setTodoStatus(clickTodo) {
    console.log(clickTodo)
    console.log(clickTodo.id)
    console.log(clickTodo.id - 1)
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    console.log(todos)
    console.log(todo.done)
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;

    this.setState({ todos });
  }

  fetchData(url) {
    this.setState({ isLoading: true })
    fetch(url)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false })
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        let countTodo = this.state.countTodo
        const todos = data.map(data => {
          const todo = Object.assign({}, data, { id: countTodo++, done: false })
          return todo
        })
        this.setState({ todos, countTodo })
      })
      .catch(() => this.setState({ hasError: true }))
  }

  componentDidMount() {
    this.fetchData('data.json');
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          deleteTodoState={this.deleteTodoState.bind(this)}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
          />
      </div>
    );
  }
}

export default App