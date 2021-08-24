// index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

// 类组件 事件
class App extends Component {
  // 初始化状态
  state = {
    firstName: "",
  };
  handleChange = (e) => {
    const value = e.target.value
    this.setState({ firstName: value })
  }
  render() {
    // 访问state值 这个值将插入进input中的value属性中
    const firstName = this.state.firstName
    return (
      <div className="App">
        <label htmlFor="firstName">first Name:</label>
        <input
          type='text'
          id='firstName'
          name='first Name'
          placeholder='First Name'
          value={firstName}
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
