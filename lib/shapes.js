const selectHex = require("./util/selectHexNumber");

class Shape {
  constructor(text, textColor, logoShape, logoColor) {
    this.text = text;
    this.textColor = textColor;
    this.logoShape = logoShape;
    this.logoColor = logoColor;
    this.hexText = selectHex(textColor);
    this.hexLogo = selectHex(logoColor);
  }
}

class Circle extends Shape {
  constructor(text, textColor, logoShape, logoColor, hexText, hexLogo) {
    super(text, textColor, logoShape, logoColor, hexText, hexLogo);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.hexLogo}"/>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, logoShape, logoColor, hexText, hexLogo) {
    super(text, textColor, logoShape, logoColor, hexText, hexLogo);
  }
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.hexLogo}" stroke-width="5"/>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, logoShape, logoColor, hexText, hexLogo) {
    super(text, textColor, logoShape, logoColor, hexText, hexLogo);
  }
  render() {
    return `<polygon points="150, 0, 50, 160, 250, 160" fill="${this.hexLogo}" />`;
  }
}

module.exports = {
  Shape: Shape,
  Circle: Circle,
  Square: Square,
  Triangle: Triangle,
};
