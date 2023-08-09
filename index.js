const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const renderColorList = require("./lib/renderColorList.js");
// const RenderShadeList = require("./lib/renderShadeList.js");
const cliColors = require("./lib/console-colors.js");

const questions = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: `${cliColors.magenta(`What is your logo's text? (Type up to three characters.)`)}`,
      },
      {
        type: "list",
        name: "textColor",
        message: `${cliColors.cyan(`What is the color of your logo's text?`)}`,
        choices: renderColorList.prototype.colorList,
      },
      // {
      //   when: function(ans) {
      //     RenderShadeList(ans.textColor)
      //   },
      // },
      // {
      //   type: "list",
      //   name: "textShade",
      //   message: `${cliColors.cyan(`Now choose a color shade for your logo's text:`)}`,
      //   choices: renderColorList.prototype.colorList,
      // },
      {
        type: "list",
        name: "shape",
        message: `${cliColors.blue(`Choose your logo's shape:`)}`,
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: "input",
        name: "shapeColor",
        message: `${cliColors.red(`What is the color of your logo's shape?`)}`,
      },
    ]);
  };

  const init = () => {
    renderColorList()
    questions()
    .then((res) => console.log(res))
    .then(() => console.log("Successful"))
    .catch((err) => console.log(err));
  }

  init();