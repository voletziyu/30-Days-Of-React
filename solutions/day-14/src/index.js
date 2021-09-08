import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/* 
React 组件的Updating可能由 props 或 state 的更改引起。当重新渲染组件时，这些方法按以下顺序调用：
  1.static getDerivedStateFromProps()
  2.shouldComponentUpdate()
  3.render()
  4.getSnapshotBeforeUpdate()
  5.componentDidUpdate()
Unmounting组件生命周期的最后一个阶段。Unmounting将组件从DOM中移除。
  componentWillUnmount()方法是唯一在组件时被调用的内置方法。
*/

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      day: 1,
      congratulate: '',
    }
  }

  // 如果该方法不返回 true，则应用程序将永远不会更新。
  // 例如，这可用于在达到某个点（游戏、订阅）时阻止使用，或者可能阻止某个用户。
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  // 方法有两个参数：prevProps 和 prevState。在 DOM 中更新组件后调用它
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day === 30) {
      this.setState({
        congratulate: 'Congratulations,Challenge has been completed',
      })
    }
    console.log(prevState, prevProps)
  }
  // Unmounting生命周期的最后一个阶段
  Unmounting() {
    console.log("The final phase in the lifecycle of a component")
  }
  // 当组件更新时会调用 render() 方法。它必须使用新的更改将 HTML 重新渲染到 DOM
  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)