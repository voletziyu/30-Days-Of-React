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
// 类组件 事件
class App extends Component {
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge");
  };
  render() {
    return <button onClick={this.greetPeople}></button>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
