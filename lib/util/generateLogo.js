const Shapes = require("../shapes");
const createSVG = require("./createFileSVG.js");

function generateLogo(answers) {
  const { text, textColor, logoShape, logoColor, font } = answers;

  const makeShape = new Shapes[logoShape](
    text,
    textColor,
    logoShape,
    logoColor,
  );

  const shapeSVG = makeShape.render();
  
  const finalTextColor = makeShape.hexText;
  const templateSVG = createSVG({ shapeSVG, finalTextColor, text, font });

  generateLogo.prototype.shape = makeShape;
  return templateSVG;
}

module.exports = generateLogo;
