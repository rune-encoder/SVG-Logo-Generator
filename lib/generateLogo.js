const Shapes = require("./shapes.js");
const selectHex = require("./selectHexNumber.js");

const generateLogo = (answers) => {
  const { text, textColor, logoShape, logoColor } = answers;

  const hexLogo = selectHex(logoColor);
  const hexText = selectHex(textColor);

  console.log(hexLogo);
  console.log(hexText);

  const makeShape = new Shapes[logoShape](
    text,
    textColor,
    logoShape,
    logoColor
  );

  console.log(makeShape.render());
  makeShape.addSVG(makeShape.render(hexLogo));

  console.log(makeShape);

  // console.log(Shapes.Circle);
  // console.log(Shapes[logoShape]);
};

module.exports = generateLogo;
