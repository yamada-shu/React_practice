import React, { Component } from 'react';
import './css/todo.css';

class Todo extends Component {

    render() {
        const className = this.props.done ? 'done' : 'undone';
        const link = this.props.done ? '元に戻す' : '完了！'
        const is_delete = this.props.done ? '削除':''
        return(
          <li className={className}>
            <span>タスク名</span>
            <span>：{this.props.title}　　</span>
                <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props) }}>{link}</a>　　
                <a href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodoState(this.props)}}>{is_delete}</a>

            <p class="contents">
              <table>
                <tr class="contents_title">タスク内容</tr>
                <td>{this.props.desc}</td>
              </table>
            </p>
          </li>
        );
      }

}

export default Todo