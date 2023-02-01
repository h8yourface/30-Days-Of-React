import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

import cssLogo from './images/css_logo.png'
import reactLogo from './images/react_logo.png'
import jsLogo from './images/js_logo.png'
import htmlLogo from './images/html_logo.png'


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

const Logos = ({ props: { htmlLogo, cssLogo, jsLogo, reactLogo, logosText } }) => (
  <div>
    <h4>{logosText}</h4>
    <div className='logos'>
      <img className='logo-img' src={htmlLogo} alt="html logo" />
      <img className='logo-img' src={cssLogo} alt="css logo" />
      <img className='logo-img' src={jsLogo} alt="js logo" />
      <img className='logo-img' src={reactLogo} alt="react logo" />
    </div>
  </div>
)

const SubscribtionForm = ({ props: { title, subtitle, FNPlaceholder, LNPlaceholder, EmPlaceholder, btnValue } }) => (
  <div className='subscribe-wrapper'>
    <h2 className='subscribe-text'>{title}</h2>
    <h3 className='subscribe-subtext'>{subtitle}</h3>
    <div>
      <input className='button' type="text" placeholder={FNPlaceholder} />
      <input className='button' type="text" placeholder={LNPlaceholder} />
      <input className='button' type="text" placeholder={EmPlaceholder} />
    </div>
    <input type="button" className='button-submit' value={btnValue} />
  </div>
)


const HexaColor = ({ hexaColor }) => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    backgroundColor: bgColor,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }


  const logosData = {
    cssLogo: cssLogo,
    htmlLogo: htmlLogo,
    reactLogo: reactLogo,
    jsLogo: jsLogo,
    logosText: 'Front End Technologies'
  }

  const subData = {
    title: 'SUBSCRIBE',
    subtitle: 'Sign up with your emall address to receive news and updates.',
    FNPlaceholder: 'First name',
    LNPlaceholder: 'Last name',
    EmPlaceholder: 'Email',
    btnValue: 'Subscribe'
  }

  return (
    <div className='app'>
      {/* <HexaColor hexaColor={hexaColor} />
      <HexaColor hexaColor={hexaColor} />
      <HexaColor hexaColor={hexaColor} />
      <HexaColor hexaColor={hexaColor} />
      <HexaColor hexaColor={hexaColor} />
      <HexaColor hexaColor={hexaColor} /> */}
      {/* <Logos props={logosData} /> */}
      {/* <SubscribtionForm props={subData} /> */}
      {/* <Header data={data} /> */}
      {/* <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      /> */}
      {/* <Footer copyRight={date} /> */}
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
