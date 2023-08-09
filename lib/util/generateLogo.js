const Shapes = require("../shapes");
const selectHex = require("./selectHexNumber.js");
const createSVG = require("./createFileSVG.js");

function generateLogo(answers) {
  const { text, textColor, logoShape, logoColor } = answers;

  const hexLogo = selectHex(logoColor);
  const hexText = selectHex(textColor);

  const makeShape = new Shapes[logoShape](
    text,
    textColor,
    logoShape,
    logoColor
  );

  const shapeSVG = makeShape.render(hexLogo);

  const templateSVG = createSVG({ shapeSVG, hexText, text });

  generateLogo.prototype.shape = makeShape;
  return templateSVG;
}

module.exports = generateLogo;
