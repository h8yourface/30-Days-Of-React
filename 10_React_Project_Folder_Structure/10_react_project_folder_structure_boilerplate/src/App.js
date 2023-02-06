import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { countriesData } from './data/countries'
import asabenehImage from './images/asabeneh.jpg'
import { showDate } from './utils/display-date-and-time'

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click show time or Greet people to change me',
    country: countriesData[1],
    backgroundColor: 'ligth'
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }
  handleTime = () => {
    let message = showDate(new Date())
    this.setState({ message })
  }
  greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020'
    this.setState({ message })
  }
  changeBackground = () => {
    const header = document.getElementsByTagName("header");
    const footer = document.getElementsByTagName("footer");
    const main = document.getElementsByTagName("main");
    let backgroundColor =
      this.state.backgroundColor === "dark" ? "light" : "dark";

    if (backgroundColor == "dark") {
      header[0].style.backgroundColor = "#20282a";
      header[0].style.color = "white";

      main[0].style.backgroundColor = "#20282a";
      main[0].style.color = "white";

      footer[0].style.backgroundColor = "#20282a";
      footer[0].style.color = "white";
    } else {
      header[0].style.backgroundColor = "#61dbfb";
      header[0].style.color = "black";

      main[0].style.backgroundColor = "white";
      main[0].style.color = "black";

      footer[0].style.backgroundColor = "#6cf";
      footer[0].style.color = "black";
    }
    this.setState({ backgroundColor });
  };


  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: new Date(),
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app'>
        <Header data={data} />
        <Main
          changeBackground={this.changeBackground}
          backgroundColor={this.state.backgroundColor}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
          country={this.state.country}
          user={user}
        />

        <Footer date={new Date()} />
      </div>
    )
  }
}

export default App
