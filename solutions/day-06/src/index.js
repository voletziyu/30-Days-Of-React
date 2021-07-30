import React from 'react'
import ReactDom from 'react-dom'

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8]
]

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Numbers = ({numbers}) => {
  const list = numbers.map((numbers)=> <li>{numbers}</li>)
  return list
}

const Skill = ({ skill:[tech, level] }) => (
  <li>
    {tech} {level}
  </li>
)

const Skills = ({skills}) =>{
  const skillsList = skills.map((skill, index) => <Skill key={index} skill={skill} />)
  console.log(skillsList)
  return <ul>{skillsList}</ul>
}

const Country = ( {country:{ name, city} }) =>{
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

const Countries = ({countries}) => {
  const countryList = countries.map((country) => <Country key={country.name} country={country} />)
  return <div>{countryList}</div>
}

const App = ()=>{
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className="container">
      <div>
       <h1>Number List</h1>
       <Numbers numbers={numbers} />
       <h1>Skills Level</h1>
       <Skills skills={skills} />
       <h1>Countries List</h1>
       <Countries countries={countries} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)