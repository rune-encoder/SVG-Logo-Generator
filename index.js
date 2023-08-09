const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

const renderColorList = require("./lib/util/renderColorList.js");
const generateLogo = require("./lib/util/generateLogo.js");
const cliColors = require("./lib/util/console-colors.js");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: `${cliColors.magenta(
        `What is your logo's text? (Type up to three characters.)`
      )}`,
      validate: (value) => {
        if (value.length > 3) {
          return console.error(cliColors.red('\n\nInvalid: Please enter up to 3 characters or less.\n'))
        } else {
          return true
        }
      }
    },
    {
      type: "rawlist",
      name: "textColor",
      message: `${cliColors.magenta(`What is the color of your logo's text?`)}`,
      choices: renderColorList.prototype.colorList,
    },
    {
      type: "list",
      name: "logoShape",
      message: `${cliColors.magenta(`Choose your logo's shape:`)}`,
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "rawlist",
      name: "logoColor",
      message: `${cliColors.magenta(`What is the color of your logo's shape?`)}`,
      choices: renderColorList.prototype.colorList,
    },
  ]);
};

const init = () => {
  renderColorList();
  questions()
    .then((response) => generateLogo(response))
    .then((response) => {
      const filename = `logo.svg`;
      writeFile(filename, response);
    })
    .then(() => console.log(cliColors.green(`\nGenerated logo.svg\n`)))
    .catch((err) => console.log(err));
};

init();
