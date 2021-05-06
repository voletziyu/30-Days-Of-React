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
// const welcome = 'Welcome to 30 Days Of React Challenge'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
// }
// const date = 'Oct 2, 2020'

// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Asabeneh Yetayeh</p>
//       <small>Oct 3, 2020</small>
//     </div>
//   </header>
// )

// 用户卡组件
// const UserCard = () => (
//   <div className='user-card'>
//     <img src={volet} alt='volet image' />
//     <h2>Asabeneh Yetayeh</h2>
//   </div>
// ) 

// 技术列表组件
// const TechList = () => {
//   const techs = ['HTML', 'CSS', 'JavaScript']
//   const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//   return techsFormatted
// }

// 主组件
// const Main = () => (
//   <main>
//     <div className='main-wrapper'>
//       <p>Prerequisite to get started react.js:</p>
//       <ul>
//         <TechList />
//       </ul>
//       <UserCard />
//     </div>
//   </main>
// )

// 底组件
// const Footer = () => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright 2020</p>
//     </div>
//   </footer>
// )

// 容器组件或者叫父组件
// const App = () => (
//   <div className='app'>
//     <Header />
//     <Main />
//     <Footer />
//   </div>
// )

// 渲染组件
// const rootElement = document.getElementById('root') 
// ReactDOM.render( <App />, rootElement)

// 插入数据进入 JSX模板组件中
// JSX element, header
// const Header = () => {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <h3>{subtitle}</h3>
//           <p>
//             Instructor: {firstName} {lastName}
//           </p>
//           <small>Date: {date}</small>
//         </div>
//       </header>
//     )
//   }
//   const rootElement = document.getElementById('root')
//   // we render the App component using the ReactDOM package
//   ReactDOM.render(<Header />, rootElement)


// JSX element, header
const welcome = 'Welcome to 30 Days Of React Challenge'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={volet} alt='volet image' />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
  </div>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <div>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
      <UserCard />
    </div>
  </main>
)

const copyRight = '2020'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

  const rootElement = document.getElementById('root')
  // we render the App component using the ReactDOM package
  ReactDOM.render(<App />, rootElement)