import React, { Component } from 'react'
import './css/form.css'

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="明日のメニュー" /><br/>
          <textarea name="desc" placeholder="説明を入力 ※必須" defaultValue="ベンチプレス"></textarea><br/>
          <button type="submit">todoを作成</button>
        </form>
      </div>
    )
  }
}
