import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {

    render() {
        if (this.props.isLoading) {
            return <h2>loading . . . </h2>;
          }
      
          if (this.props.hasError) {
            return <h2>error</h2>;
          }
        const todos = this.props.todos.map( todo =>
          <Todo
            key={todo.id}
            {...todo}
                setTodoStatus={this.props.setTodoStatus}
                deleteTodoState={this.props.deleteTodoState}
          />
        )

    return(
      <ul>
        {todos}
      </ul>
    );
  }
}

export default TodoList