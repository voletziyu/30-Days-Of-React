// index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

// 函数组件 事件
// const App = () =>{
//     const greetPeople = () => {
//         alert('Welcome to 30 Days Of React Challenge')
//     }
//     return <button onClick={greetPeople}></button>
// }

// 常用的鼠标和键盘事件
// onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onKeyDown, onKeyPress, onKeyUp,
// onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit

// 类组件 事件
class App extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  };
  handleClick = (e) => {
    // e 给出一个事件对象
    // 检查e的值用 console.log(e)
    console.log(e);
    this.setState({
      message: "Welcome to the world of events",
    });
  };

  // 鼠标经过触发
  handleMouseMove = (e) => {
    this.setState({ message: "mouse is moving" });
  };

  // 获取输入框改变的值
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    });
  };

  // 获取输入框键盘值按下的值
  // 对输入框和文本域有效
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    });
  };

  // 鼠标离开输入框失去焦点
  handleBlur = () => {
    this.setState({ message: "Input field has been blurred" });
  };

  // 此事件在文本复制期间触发
  handleCopy = (e) => {
    this.setState({
      message: "Using 30 Days Of React for commercial purpose is not allowed",
    });
  };

  // greetPeople = () => {
  //   alert("Welcome to 30 Days Of React Challenge");
  // };
  render() {
    // return <button onClick={this.greetPeople}></button>;
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{this.state.message}</p>
        <label htmlFor=""> Test for onKeyPress Event: </label>
        <input type="text" onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor=""> Test for onBlur Event: </label>
        <input type="text" onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              onChange={this.handleChange}
              name="firstName"
              value={this.state.value}
            />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
