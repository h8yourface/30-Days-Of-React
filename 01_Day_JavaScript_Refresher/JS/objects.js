// const dog = {
//   name: "Dog",
//   legs: 4,
//   color: "some",
//   age: 12,
//   bark: "woof",
// };
// dog.breed = "rich";
// dog.getDogInfo = function () {
//   console.log(
//     `This dog is named ${this.name}, has ${this.legs} and bark with ${this.bark}`
//   );
// };

// for (const key in dog) {
//   console.log(key, dog[key]);
// }

// dog.getDogInfo();

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let skillsAmount = 0;
let personWithSkillSet = {};
let personWithMERN = {};
let amountOfLogged = 0;
let amountOfHighScores = 0;

for (const name in users) {
  if (users[name].skills.length >= skillsAmount) {
    skillsAmount = users[name].skills.length;
    personWithSkillSet = {};
    personWithSkillSet[`${name}`] = Object.assign({}, users[name]);
  }
  if (users[name].isLoggedIn) {
    amountOfLogged++;
  }
  if (users[name].points >= 50) {
    amountOfHighScores++;
  }
  if (users[name].skills.includes("MongoDB", "Express", "React", "Node")) {
    personWithMERN[`${name}`] = Object.assign({}, users[name]);
  }
}

users.Sergei = {};

for (const name in users) {
  const values = Object.values(users[name]);
//   console.log(values);
}

// console.log(skillsAmount, personWithSkillSet);
// console.log(amountOfLogged, amountOfHighScores)
// console.log(personWithMERN);
// console.log(Object.keys(users))
