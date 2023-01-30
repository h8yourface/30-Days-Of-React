const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let result = ages.sort((a, b) => a - b);

// console.log(result[0], result[result.length - 1]);

// console.log(
//   result.length % 2 == 0
//     ? (result[result.length / 2 - 1] + result[result.length / 2]) / 2
//     : result[result.length - 1]
// );

// [let sum = 0;
// result.forEach((el) => {
//   sum += el;
// });

// let last = result[result.length - 1];
// let first = result[0];

// let diff = last - first;

// let average = sum / result.length;]

// console.log(diff, average, Math.abs(last - average), Math.abs(first - average))

// console.log(countries)

let tenCountries = countries.slice(0, 10);
// console.log(tenCountries);

// countries.length % 2 == 0
//   ? console.log(
//       countries[countries.length / 2 - 1],
//       countries[countries.length / 2]
//     )
//   : console.log(countries[(countries.length - 1) / 2]);

let firstPart = [];
let secondPart = [];

if (countries.length % 2 == 0) {
  firstPart = countries.slice(0, countries.length / 2);
  secondPart = countries.slice(countries.length / 2, countries.length);
} else {
  firstPart = countries.slice(0, (countries.length - 1) / 2);
  secondPart = countries.slice((countries.length - 1) / 2, countries.length);
}

// console.log(firstPart, secondPart);
const getTime = function () {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const sumAll = function () {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  return sum;
};

const [x, y] = [2, (value) => value ** 2];
// console.log(x, y(x));

const props = {
  user: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
  },
  post: {
    title: "Destructuring and Spread",
    subtitle: "ES6",
    year: 2020,
  },
  skills: ["JS", "React", "Redux", "Node", "Python"],
};

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

function getInfo1(person) {
  let skills = person.skills.slice(0, person.skills.length - 1).join(", ");
  return `${person.firstName} ${person.lastName} lives in ${
    person.country
  }. He is ${person.age} years old. He is an ${
    person.job
  }. He teaches ${skills} and ${
    person.skills[person.skills.length - 1]
  }. He speaks ${person.languages[0]}, ${
    person.languages[1]
  } and a little bit of ${person.languages[2]}`;
}

function getInfo2(person) {
  const { firstName, lastName, country, age, job, skills, languages } = person;
  let partSkill = person.skills.slice(0, person.skills.length - 1).join(", ");
  return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${partSkill} and ${
    skills[skills.length - 1]
  }. He speaks ${languages[0]}, ${languages[1]} and a little bit of ${
    languages[2]
  }`;
}

// console.log(getInfo2(person));

let numbers = [];
let i = 0;

while (i < 12) {
  numbers.push(Math.round(Math.random() * 10));
  i++;
}
// console.log(numbers)

let res1, res2, res3;

res1 = numbers.reduce((acc, cur) => acc + cur);
res2 = numbers.reduce((acc, cur) => acc * cur);
res3 = numbers.reduce((acc, cur) => acc ** cur);

// console.log(res1, res2, res3);

/*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */
