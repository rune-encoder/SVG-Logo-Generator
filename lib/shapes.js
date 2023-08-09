class Shape {
  constructor(text, textColor, logoColor, logoShape) {
    this.text = text;
    this.textColor = textColor;
    this.logoShape = logoShape;
    this.logoColor = logoColor;
  }
}

class Circle extends Shape {
  constructor(text, textColor, logoColor, logoShape) {
    super(text, textColor, logoColor, logoShape);
  }
  render(hexLogo) {
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
  render(hexLogo) {
    return `<polygon points="150, 0, 50, 160, 250, 160" fill="${hexLogo}" />`;
  }
}

module.exports = {
  Shape: Shape,
  Circle: Circle,
  Square : Square,
  Triangle : Triangle
};
