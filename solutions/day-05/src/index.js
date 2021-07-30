// import React from 'react'
// import ReactDom from 'react-dom'

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }

// // Header组件
// const Header = (props) => {
//   const data = props.data
//   const { welcome, title, subtitle, author, date } = data
//   const { firstName, lastName } = author
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

// // number 组件
// const Age = (props)=> <div>The person is {props.age} years old.</div>
// const Weight = (props)=> <div>The weight of object on earth is {props.weight} N.</div>

// // skills组件
// const Skills = (props) => {
//   // modifying the skills array
//   const skillList = props.skills.map((skill) => <li>{skill}</li>)
//   return <ul>{skillList}</ul>
// }

// // 函数prop
// const Button = (props)=> <button onClick={props.onClick}>{props.text}</button>

// // App父组件（函数式组件）
// const App = ()=>{
//   const data = {
//     welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'volet',
//       lastName: 'Yetayeh',
//     },
//     date: new Date(),
//   }
//   const age = 25
//   const weight = 70
//   const sayHi = ()=>{
//     alert('Hi')
//   }

//   return (
//     <div className='app'>
//       <Header data={data} />
//       <Age age={age} />
//       <Weight weight={weight} />
//       <Skills skills={['HTML', 'CSS', 'JavaScript']} />
//       <Button text="Say Hi" onClick={sayHi} />
//       <Button text="Show Time" onClick={()=> alert(new Date())} />
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDom.render(<App />, rootElement)

// 完整组件展示
import React from 'react'
import ReactDOM from 'react-dom'
import voletImage from './images/volet.jpg'

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'volet',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: voletImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)