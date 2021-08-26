// index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

// 使用 ref 从 DOM 获取表单值，而不是为每个状态更新编写事件处理程序。
// 在不受控制的输入中，我们从输入字段中获取数据，就像传统的 HTML 表单数据处理一样
// 类组件 事件
class App extends Component {
  firstName = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.firstName.current.value)
    console.log(this.firstName)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name </label>
          <input
            type='text'
            name='firstName'
            onChange={this.handleChange}
            placeholder='First Name'
            ref={this.firstName}
          />
          <button type='submit'>Submit</button>
        </form>
      </div >
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
