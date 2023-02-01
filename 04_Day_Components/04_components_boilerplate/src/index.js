// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

import cssLogo from './images/css_logo.png'
import reactLogo from './images/react_logo.png'
import jsLogo from './images/js_logo.png'
import htmlLogo from './images/html_logo.png'


const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    backgroundColor: bgColor,
    color: 'white',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '100%',
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

// Header Component
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

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
)

const ColorGenerator = () => (
  <div>
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
  </div>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

const Logos = () => (
  <div>
    <h4>Front End Technologies</h4>
    <div className='logos'>
      <img className='logo-img' src={htmlLogo} alt="html logo" />
      <img className='logo-img' src={cssLogo} alt="css logo" />
      <img className='logo-img' src={jsLogo} alt="js logo" />
      <img className='logo-img' src={reactLogo} alt="react logo" />
    </div>
  </div>
)

const SubscribtionForm = () => (
  <div className='subscribe-wrapper'>
    <h2 className='subscribe-text'>SUBSCRIBE</h2>
    <h3 className='subscribe-subtext'>Sign up with your emall address to receive news and updates.</h3>
    <div>
      <input className='button' type="text" placeholder='First Name' />
      <input className='button' type="text" placeholder='Last Name' />
      <input className='button' type="text" placeholder='Email' />
    </div>
    <input type="button" className='button-submit' value="Subscribe" />
  </div>
)
// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    {
      // <SubscribtionForm />
      // <Logos />
      <ColorGenerator />
      //  <Header />
      // <Main />
      // <Footer /> 
    }

  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
