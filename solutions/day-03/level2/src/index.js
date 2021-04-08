// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import frontImage from './images/frontend_technologies.png'


// JSX element
const img = <img src={frontImage}></img>

// JSX element, title

const title = <h1>SUBSCRIBE</h1>

// JSX element, content
const contentStyle = {
  fontSize:20,
  color:'#4F5554'
}
const content = <p style={contentStyle}>Sign up with you email address receive news and update.</p>
// JSX element, input
const inputBox = {
  width:'100%',
  display:'flex',
  justifyContent:'center'
}

const inputStyle = {
  margin:10,
  width:200,
  height:30,
  borderRadius:10,
  border:0,
  fontSize:12,
  paddingLeft:10,
}

const inputs = (
  <div style={inputBox}>
    <input style={inputStyle} placeholder='First name'></input>
    <input style={inputStyle} placeholder='Last name'></input>
    <input style={inputStyle} placeholder='Email'></input>
  </div>
  )

// JSX element, button
const buttonStyle = {
  width:300,
  height:40,
  background:'#F37474',
  borderRadius:10,
  margin:20,
}
const button = (
  <div>
    <button style={buttonStyle}>Subscribe</button>
  </div>
)
// JSX element, app
const appStyle = {
  width:'70%',
  borderRadius:'30px',  
  background:'#C2E6F4',
  display:'flex',
  justifyContent: 'center',/* 水平居中 */
  alignItems: 'center',  /* 垂直居中 */
  flexDirection:'column'
}

const app = (
  <div style = {appStyle}>
    {title}
    {content}
    {inputs}
    {button}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)