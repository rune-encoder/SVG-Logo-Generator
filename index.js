// inquirer 8.2.4 must be installed.
const inquirer = require("inquirer");

//Using promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require("fs").promises;

// Loads modules from renderColorList.js. Creates a list of choices for our color options
const renderColorList = require("./lib/util/renderColorList.js");
// Loads modules from renderFontList.js. Creates a list of choices for our font options
const renderFontList = require("./lib/util/renderFontList.js");
// Loads modules from generateLogo.js. Will be used to pass our user input and create a SVG logo.
const generateLogo = require("./lib/util/generateLogo.js");
// Loads modules from console-colors.js. Changes the console's text color. 
const cliColors = require("./lib/util/console-colors.js");

// Array created to ask questions. Answers will be used to make an SVG logo.
const questions = () => {
  return inquirer.prompt([
    // Text for logo.
    {
      type: "input",
      name: "text",
      message: `${cliColors.magenta(
        `What is your logo's text? (Type up to three characters.)`
      )}`,

      // Confirms if characters inputed are less than three.
      validate: (value) => {
        if (value.length > 3) {
          return console.error(cliColors.red('\n\nInvalid: Please enter up to 3 characters or less.\n'))
        } else {
          return true
        }
      }
    },
    // Chooses logo's text color.
    {
      type: "rawlist",
      name: "textColor",
      message: `${cliColors.magenta(`What is the color of your logo's text?`)}`,
      choices: renderColorList.prototype.colorList,
    },
    // Choose the logo's background shape.
    {
      type: "list",
      name: "logoShape",
      message: `${cliColors.magenta(`Choose your logo's shape:`)}`,
      choices: ["Circle", "Square", "Triangle", "Hexagon", "Star", "Moon", "Heart", "Witch"],
    },
    // Choose logo's shape color.
    {
      type: "rawlist",
      name: "logoColor",
      message: `${cliColors.magenta(`What is the color of your logo's shape?`)}`,
      choices: renderColorList.prototype.colorList,
    },
    // Choose logo's text font style.
    {
      type: "list",
      name: "font",
      message: `${cliColors.magenta(`What font would you like in your logo?`)}`,
      choices: renderFontList.prototype.fontList,
      default: 'san-serif',
    },
  ]);
};

// Function to initialize application.
const init = () => {
  // Generates color option's list that will be used for our choices with renderColorList.js module.
  renderColorList();
  renderFontList();
  // Generates questions with inquier.
  questions()
  // Passes answers to generate SVG Logo code that will be used in our logo.svg file.
    .then((response) => generateLogo(response))
    // Creates logo.svg file. 
    .then((response) => {
      const filename = `logo.svg`;
      writeFile(filename, response);
    })
    // If no errors detected: Logs 'Generated logo.svg'
    .then(() => console.log(cliColors.green(`\nGenerated logo.svg\n`)))
    // If errors are detected: Logs Error.
    .catch((err) => console.log(err));
};

// Function call to initialize application.
init();
