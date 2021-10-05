// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "file",
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
    type: "checkbox",
    name: "licenses",
    message: "Which license will you be using: GNU, Apache, BSD, MIT",
    choices: ["GNU", "Apache", "BSD", "MIT", "none"],
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
function writeToFile(fileName, data) {
  //do i need to json.stringify any of this?
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    //console.log(fileName);
    writeToFile("README.md", generateMarkdown({ ...data }));
  });
}
// Function call to initialize app
init();
