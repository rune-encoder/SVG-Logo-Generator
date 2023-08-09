class Shape {
  constructor(text, textColor, logoColor, logoShape) {
    this.text = text;
    this.textColor = textColor;
    this.logoShape = logoShape;
    this.logoColor = logoColor;
    this.svgStrings = [];
  }
}

Shape.prototype.addSVG = function (addFileCode) {
  this.svgStrings.push(addFileCode);
  this.svgStrings.join("");
};

class Circle extends Shape {
  constructor(text, textColor, logoColor, logoShape) {
    super(text, textColor, logoColor, logoShape);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${hexLogo}"/>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, logoColor, logoShape) {
    super(text, textColor, logoColor, logoShape);
  }
  render(hexLogo) {
    return `<rect x="70" y="20" width="160" height="160" fill="${hexLogo}" stroke-width="5"/>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, logoColor, logoShape) {
    super(text, textColor, logoColor, logoShape);
  }
  render() {
    return `<polygon points="150, 0, 50, 160, 250, 160" fill="${hexLogo}" />`;
  }
}

module.exports = {
  Shape: Shape,
  Circle: Circle,
  Square : Square,
  Triangle : Triangle
};
