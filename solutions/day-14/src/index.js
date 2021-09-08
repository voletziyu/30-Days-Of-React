import React, { Component } from 'react'
import ReactDOM from 'react-dom'
/* 
在React中，每个组件有三个主要阶段：
  1.Mounting
  2.Updating
  3.Unmounting 
将 React 组件渲染或放入 DOM 称为Mounting, 以下是Mounting期间按顺序执行的内置函数：
  
  1.constructor()
  2.static getDerivedStateFromProps()
  3.render() // 强制要求必须有的函数
  4.componentDidMount()

*/

class App extends Component {
  // 在其它函数之前执行，组件设置初始state和其他值的地方。
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    // 我们可以在构造函数内部或外部写入state
    // 如果写在构造函数之外，则不需要关键字 this
    this.state = {
      firstName: '',
    }
  }
  // 在渲染 DOM 中的组件之前被调用。
  static getDerivedStateFromProps(props, state) {
    console.log(
      'I am getDerivedStateFromProps and I will be the second to run.'
    )
    return null
  }
  // 在render函数之后调用 设置时间间隔和调用 API 的地方
  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
    // 3秒后重置state状态
    setTimeout(() => {
      this.setState({
        firstName: 'Asabeneh',
      })
    }, 3000)
  }

  // 创建类组件的时候强制要求的函数，在render函数中禁止设置state
  render() {
    console.log('I am render and I will be the third to run.')
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)