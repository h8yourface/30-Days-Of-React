// index.js

import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

import { tenHighestPopulation } from "./data/ten_most_highest_populations";

// Fuction to show month date year

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// class based component
class Header extends React.Component {
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button
            text="Greet People"
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text="Show Time"
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}
class Number extends React.Component {
  render() {
    const { num } = this.props;
    let color = num % 2 == 0 ? "green" : "yellow";
    if (this.isPrime(num)) color = "red";
    const styles = {
      display: "flex",
      backgroundColor: color,
      width: "8em",
      height: "8em",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      margin: "1px",
    };

    return (
      <div style={styles}>
        <h2>{num}</h2>
      </div>
    );
  }
  isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    var sqrt = Math.sqrt(num);
    for (var i = 2; i <= sqrt; i++) if (num % i === 0) return false;
    return true;
  }
}

class Numbers extends React.Component {
  render() {
    const list = this.props.numbers.map((num) => (
      <Number num={num} key={num} />
    ));
    return <div className="blockList">{list}</div>;
  }
}

class HexaColor extends React.Component {
  hexaColor() {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  }
  render() {
    const bgColor = this.hexaColor();
    const styles = {
      display: "flex",
      backgroundColor: bgColor,
      width: "8em",
      height: "8em",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      margin: "1px",
    };
    return (
      <div style={styles}>
        <h2>{bgColor}</h2>
      </div>
    );
  }
}

class HexaColors extends React.Component {
  render() {
    let arr = new Array(this.props.amount).fill(1);
    const list = arr.map((num, index) => <HexaColor key={index} />);
    return <div className="blockList">{list}</div>;
  }
}

class CountryPop extends React.Component {
  render() {
    const { country, population } = this.props.country;
    const WORLD_POPULATION = tenHighestPopulation[0].population;
    const ratio = (population / WORLD_POPULATION) * 100;
    const styles = {
      width: `${ratio}%`,
      borderRadius: "5px",
      backgroundColor: " #f7b345",
    };
    return (
      <div className="countryPop">
        <h3 className="countryPopName">{country}</h3>
        <div className="countryPopChart">
          <div style={styles}></div>
        </div>
        <h3 className="countryPopNumber">
          {population.toLocaleString("en-US")}
        </h3>
      </div>
    );
  }
}

class CountriesList extends React.Component {
  render() {
    const countryList = this.props.list.map((country) => (
      <CountryPop key={country.country} country={country} />
    ));
    return <div>{countryList}</div>;
  }
}

class App extends React.Component {
  // showDate = (time) => {
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
  // handleTime = () => {
  //   alert(this.showDate(new Date()))
  // }
  // greetPeople = () => {
  //   alert('Welcome to 30 Days Of React Challenge, 2020')
  // }
  render() {
    const numbers = [];
    for (let index = 0; index < 31; index++) {
      numbers.push(index);
    }
    // const data = {
    //   welcome: 'Welcome to 30 Days Of React',
    //   title: 'Getting Started React',
    //   subtitle: 'JavaScript Library',
    //   author: {
    //     firstName: 'Asabeneh',
    //     lastName: 'Yetayeh',
    //   },
    //   date: 'Oct 7, 2020',
    // }
    // const techs = ['HTML', 'CSS', 'JavaScript']

    // // copying the author from data object to user variable using spread operator
    // const user = { ...data.author, image: asabenehImage }

    return (
      // <div className='app'>
      //   <Header data={data} />
      //   <Main
      //     user={user}
      //     techs={techs}
      //     handleTime={this.handleTime}
      //     greetPeople={this.greetPeople}
      //   />

      //   <Footer date={new Date()} />
      // </div>

      <div className="app">
        <h1>30 DAYS OF REACT</h1>
        <h2>Number Generator</h2>
        <Numbers numbers={numbers} />
      </div>

      // <div className="app">
      //   <h1>30 DAYS OF REACT</h1>
      //   <h2>Hexadecimal Colors</h2>
      //   <HexaColors amount={30} />
      // </div>
      // <div className="app">
      //   <h1>30 DAYS OF REACT</h1>
      //   <h2>World Population</h2>
      //   <CountriesList list={tenHighestPopulation} />
      // </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
