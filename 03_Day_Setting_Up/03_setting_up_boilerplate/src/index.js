// index.js
import React from 'react'
import ReactDOM from 'react-dom'

const main = <div className='main-wrapper'>
  <h2>SUBSCRIBE</h2>
  <h3>Sign up with your emall address to receive news and updates.</h3>
  <div>
    <input className='button' type="text" placeholder='First Name' />
    <input className='button' type="text" placeholder='Last Name' />
    <input className='button' type="text" placeholder='Email' />
    </div>
  <input type="button" className='button-submit' value="Subscribe" />
</div>

// JSX element, app
const app = (
  <div className='app'>
    {main}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
