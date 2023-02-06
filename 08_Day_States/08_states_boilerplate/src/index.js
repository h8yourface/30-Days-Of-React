// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

import { countriesData } from "./data/countries";

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

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
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header style={this.props.styles}>
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

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props;
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
          <Button
            text="Change Background"
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
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

class ChooseCountry extends React.Component {
  render() {
    const { name, capital, languages, population, flag, currency } =
      this.props.country;
    const altText = "Flag of " + name;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "15em",
            boxShadow: "0 0 8px 0px black",
            margin: "20px",
            padding: "20px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              {/* <img src={flag} alt={altText} /> */}
              <h2><b>{name.toUpperCase()}</b></h2>
            </div>
            <div>
              <p>Capital: {capital}</p>
              <p>Language: {languages.join(", ")}</p>
              <p>Population: {population.toLocaleString("en-US")}</p>
              <p>Currency: {currency}</p>
            </div>
          </div>
        </div>
        <Button
          text="Select country"
          onClick={this.props.changeCountry}
          style={buttonStyles}
        />
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    country: countriesData[Math.floor(Math.random() * countriesData.length)],
    count: 0,
    styles: {
      backgroundColor: "",
      color: "",
    },
  };
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };

  changeCountry = () => {
    const country = this.state.country;
    let nextCountry;

    nextCountry =
      countriesData[Math.floor(Math.random() * countriesData.length - 1)];
    while (nextCountry == country) {
      nextCountry =
        countriesData[Math.floor(Math.random() * countriesData.length - 1)];
    }
    console.log(nextCountry);
    this.setState({ country: nextCountry });
  };

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
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
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const techs = ["HTML", "CSS", "JavaScript"];
    const date = new Date();
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className="app">
        <Header data={data} />
        <ChooseCountry
          country={this.state.country}
          changeCountry={this.changeCountry}
        />
        {/* <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        /> */}
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
