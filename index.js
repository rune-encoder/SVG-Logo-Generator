const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

const renderColorList = require("./lib/renderColorList.js");
const generateLogo = require("./lib/generateLogo.js");
const cliColors = require("./lib/console-colors.js");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: `${cliColors.green(
        `What is your logo's text? (Type up to three characters.)`
      )}`,
    },
    {
      type: "list",
      name: "textColor",
      message: `${cliColors.cyan(`What is the color of your logo's text?`)}`,
      choices: renderColorList.prototype.colorList,
    },
    {
      type: "list",
      name: "logoShape",
      message: `${cliColors.green(`Choose your logo's shape:`)}`,
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "list",
      name: "logoColor",
      message: `${cliColors.cyan(`What is the color of your logo's shape?`)}`,
      choices: renderColorList.prototype.colorList,
    },
  ]);
};

const init = () => {
  renderColorList();
  questions()
    .then((response) => generateLogo(response))
    .then((response) => {
      const filename = `${generateLogo.prototype.something.text
        .toLowerCase()
        .split(" ")
        .join("")}.svg`;
      writeFile(filename, response);
    })
    .then(() => console.log("Successful"))
    .catch((err) => console.log(err));
};

init();
