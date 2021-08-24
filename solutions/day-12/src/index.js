// index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

// 类组件 事件
class App extends Component {
  // 初始化状态
  state = {
    firstName: "",
    lastName: '',
    country: '',
    title: '',
  };
  handleChange = (e) => {
    // 我们像这样去e.target.name, e.target.value 得到 name和value
    // 但是也可以解构去得到这两个值 
    const { name, value } = e.target
    // [variablename]在一个对象中使用一个变量名称作为键。
    // name指的是输入元素的名称属性
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    // e.preventDefault() 停止表单元素的默认行为, 特别刷新页面
    e.preventDefault()
    // 这个地方是我们连接后端api 去发送数据到数据库的地方
    console.log(this.state)
  }
  render() {
    // 解构获得state的值
    const { firstName, lastName, title, country } = this.state
    return (
      <div className="App">
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name: </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='country'>Country: </label>
            <input
              type='text'
              id='country'
              name='country'
              placeholder='Country'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='country'>Title: </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Title'
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
