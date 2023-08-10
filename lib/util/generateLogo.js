// Loads modules from shapes.js. It contains our Shape Classes.
const Shapes = require("../shapes");
// Loads modules from createFileSVG.js. It will create the code for our SVG file.
const createSVG = require("./createFileSVG.js");

// Function invoked after answering our questions.
// Will pass through the user's answers.
function generateLogo(answers) {
  // Deconstruct the user's answers to make them easily accessible.
  const { text, textColor, logoShape, logoColor, font } = answers;

  // Sets the variable "makeShape" to the corresponding Shape object and initializes with our chosen properties.
  // The [logoShape] is used as a dynamic way to make sure the Shape class we selected is the same as the one we are setting it to.
  const makeShape = new Shapes[logoShape](
    text,
    textColor,
    logoShape,
    logoColor
  );

  //Using our selected shape and it's created class, this will render the shape's code and set it in a variable.
  const shapeSVG = makeShape.render();

  // Sets variable "finalTextColor" to our selected colors hexadecimal code (obtained from the shape's class).
  const finalTextColor = makeShape.hexText;

  // This will create a template svg file code. We will pass in our shapes code, text color, text, and selected font to generate our desired logo.  
  const templateSVG = createSVG({ shapeSVG, finalTextColor, text, font });

  generateLogo.prototype.shape = makeShape;
  
  // Will return our final SVG template before writing the SVG file in index.js
  return templateSVG;
}

module.exports = generateLogo;
