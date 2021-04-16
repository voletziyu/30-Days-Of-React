import React from 'react'
import ReactDOM from 'react-dom'
import volet from './images/volet.jpg'

// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const firstName = 'Asabeneh'
// const lastName = 'Yetayeh'
// const date = 'Oct 3, 2020'

// // JSX Header模版
// const Header = () => {
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           Instructor: {firstName} {lastName}
//         </p>
//         <small>Date: {date}</small>
//       </div>
//     </header>
//   )
// }

// const rootElement = document.querySelector('.root')
// // 渲染组件
// ReactDOM.render(<Header />, rootElement)



// 实现更复杂的组件
// JSX模板
const welcome = 'Welcome to 30 Days Of React Challenge'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// 用户卡组件
const UserCard = () => (
  <div className='user-card'>
    <img src={volet} alt='asabeneh image' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
) 

// 技术列表组件
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// 主组件
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
)

// 底组件
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// 容器组件或者叫父组件
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

// 渲染组件
const rootElement = document.getElementById('root') 
ReactDOM.render( <App />, rootElement)