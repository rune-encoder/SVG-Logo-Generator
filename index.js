const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const cliColor = require("./lib/console-colors.js");

const questions = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: `${cliColor.magenta(`What is your logo's text? (Type up to three characters.)`)}`,
      },
      {
        type: "input",
        name: "textColor",
        message: `${cliColor.cyan(`What is the color of your logo's text?`)}`,
      },
      {
        type: "list",
        name: "shape",
        message: `${cliColor.blue(`Choose your logo's shape:`)}`,
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: "input",
        name: "shapeColor",
        message: `${cliColor.red(`What is the color of your logo's shape?`)}`,
      },
    ]);
  };

  const init = () => {
    questions()
    .then(() => console.log("Successful"))
    .catch((err) => console.log(err));
  }

  init();