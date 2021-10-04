// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "fileName",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of your project:",
  },
  {
    type: "input",
    name: "install",
    message: "What are the installation instructions for this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "guidelines",
    message: "List the contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions for this project",
  },
  {
    //license with list of options
    type: "input",
    name: "license",
    message: "Which license will you be using: GNU, Apache, BSD, MIT",
  },
  {
    type: "input",
    name: "gituser",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  const userResponses = inquirer
    .prompt(questions)
    .then((answers) => writeToFile(answers));
}
// Function call to initialize app
init();

// validate: function (answer) {
//     if (answer.length < 1) {
//         return console.log("Please provide valid username");
//     }
//     return true;
// }
