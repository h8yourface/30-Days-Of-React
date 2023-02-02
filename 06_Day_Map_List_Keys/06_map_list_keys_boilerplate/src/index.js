import React from "react";
import ReactDOM from "react-dom";

// importing data

import { countriesData } from "./data/countries";
import { tenHighestPopulation } from "./data/ten_most_highest_populations";

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countryList}</div>;
};

const Number = ({ num }) => {
  let color = num % 2 == 0 ? "green" : "yellow";
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    var sqrt = Math.sqrt(num);
    for (var i = 2; i <= sqrt; i++) if (num % i === 0) return false;
    return true;
  };
  if (isPrime(num)) color = "red";

  const styles = {
    display: 'flex',
    backgroundColor: color,
    width: '8em',
    height: '8em',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: '1px'
  };

  return (
    <div style={styles}>
      <h2>{num}</h2>
    </div>
  );
};

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = ({ hexaColor }) => {
  const bgColor = hexaColor()
  const styles = {
    display: 'flex',
    backgroundColor: bgColor,
    width: '8em',
    height: '8em',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: '1px'
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

const Numbers = ({ numbers }) => {
  const list = numbers.map((num) => <Number num={num} key={num} />);
  return <div className='blockList'>{list}</div>;
};

const HexaColors = ({ hexaColor, amount }) => {
  let arr = new Array(amount).fill(1);
  const list = arr.map((num, index) => <HexaColor hexaColor={hexaColor} key={index} />);
  return <div className='blockList'>{list}</div>;
};

const CountryPop = ({ props: { country, population } }) => {
  const WORLD_POPULATION = tenHighestPopulation[0].population
  const ratio = (population / WORLD_POPULATION) * 100
  const styles = {
    width: `${ratio}%`,
    borderRadius: '5px',
    backgroundColor: ' #f7b345'
  }
  return <div className="countryPop">
    <h3 className='countryPopName'>{country}</h3>
    <div className='countryPopChart'><div style={styles}></div></div>
    <h3 className='countryPopNumber'>{population.toLocaleString("en-US")}</h3>
  </div>
};

const CountriesList = ({ props }) => {
  const countryList = props.map((country) => (
    <CountryPop key={country.country} props={country} />
  ))
  return <div>{countryList}</div>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    // <div className="app">
    //   <h1>30 DAYS OF REACT</h1>
    //   <h2>Number Generator</h2>
    //   <Numbers numbers={numbers} />
    // </div>

    // <div className="app">
    //   <h1>30 DAYS OF REACT</h1>
    //   <h2>Hexadecimal Colors</h2>
    //   <HexaColors hexaColor={hexaColor} amount={30} />
    // </div>
    <div className="app">
      <h1>30 DAYS OF REACT</h1>
      <h2>World Population</h2>
      <CountriesList props={tenHighestPopulation} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
