const Shapes = require("./shapes.js");
const selectHex = require("./selectHexNumber.js");
const createSVG = require("./createFileSVG.js");

const generateLogo = (answers) => {
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

  const file = createSVG({ shapeSVG, hexText });
  
  console.log(hexLogo);
  console.log(hexText);
  console.log(file);
};

module.exports = generateLogo;
