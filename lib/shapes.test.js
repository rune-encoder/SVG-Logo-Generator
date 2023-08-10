// Deconstruct the shapes.js to make it easier to get the class shape.
// Without deconstructing we would need to write new shapes.Circle() for every line of code.
const {
  Circle,
  Square,
  Triangle,
  Hexagon,
  Star,
  Moon,
  Heart,
  Witch,
} = require("./shapes.js");

// Loads modules from selectHexNumber.js (Function will be used to obtain choen color's hex number code equivalent).
const selectHex = require("../lib/util/selectHexNumber.js");

// Creates a testing suite for Shapes.
describe("Shape", () => {
  // Inside the suite we will hold all our shapes to test with jest.
  describe("Circle", () => {
    // The test should pass if our selected color... which we then obtain the hexadecimal number...
    // after rendering the shape's code matches the hardcoded shape code with the hexadecimal number.
    it("Should render the `selected color` with the correct hexadecimal code for our Circle SVG file code.", () => {
      // Variable shape creates a new circle class
      const shape = new Circle();
      // Sets variable of our text's color to "Pastel Blue".
      const colorText = "Pastel Blue";
      // Our chosen color will then be ran in our selectHex function.
      // This will label our 'colorHex' variable with the correct hexadecimal number.
      const colorHex = selectHex(colorText);
      // Sets our hexadecimal number from before to our Circle classe's 'hexLogo' property.
      shape.hexLogo = colorHex;
      // If our rendered code is equal to the following code: test will pass.
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="#A7C7E7"/>`
      );
    });
  });

  describe("Square", () => {
    it("Should render the `selected color` with the correct hexadecimal code for our Square SVG file code.", () => {
      const shape = new Square();
      const colorText = "Sea Green";
      const colorHex = selectHex(colorText);
      shape.hexLogo = colorHex;
      expect(shape.render()).toEqual(
        `<rect x="70" y="20" width="160" height="160" fill="#2E8B57" stroke-width="5"/>`
      );
    });
  });

  describe("Triangle", () => {
    it("Should render the `selected color` with the correct hexadecimal code for our Triangle SVG file code.", () => {
      const shape = new Triangle();
      const colorText = "Amber";
      const colorHex = selectHex(colorText);
      shape.hexLogo = colorHex;
      expect(shape.render()).toEqual(
        `<polygon points="150, 0, 50, 160, 250, 160" fill="#FFBF00" />`
      );
    });
  });

  describe("Hexagon", () => {
    it("Should render the `selected color` with the correct hexadecimal code for our Hexagon SVG file code.", () => {
      const shape = new Hexagon();
      const colorText = "Fawn";
      const colorHex = selectHex(colorText);
      shape.hexLogo = colorHex;
      expect(shape.render()).toEqual(
        `<path d="M 149.931 17.671 L 229.2 58.881 L 229.2 141.302 L 149.931 182.513 L 70.662 141.303 L 70.662 58.881 Z" style="fill: #E5AA70" shape="n-gon 149.931 100.092 91.532 82.421 6 0 1@63f98990"></path>`
      );
    });
  });

  describe("Star", () => {
    it("Should render the `selected color` with the correct hexadecimal code for our Star SVG file code.", () => {
      const shape = new Star();
      const colorText = "Platinum";
      const colorHex = selectHex(colorText);
      shape.hexLogo = colorHex;
      expect(shape.render()).toEqual(
        `<path d="M 150.259 11.444 L 175.195 77.53 L 251.129 78.956 L 190.607 121.225 L 212.6 188.192 L 150.259 148.23 L 87.918 188.192 L 109.911 121.225 L 49.389 78.956 L 125.323 77.53 Z" style="fill: #E5E4E2" shape="star 150.259 109.148 106.061 97.704 0.4 5 1@00c391ac"></path>`
      );
    });
  });

  describe("Moon", () => {
    it("Should render the `selected color` with the correct hexadecimal code for our Moon SVG file code.", () => {
      const shape = new Moon();
      const colorText = "Robin Egg Blue";
      const colorHex = selectHex(colorText);
      shape.hexLogo = colorHex;
      expect(shape.render()).toEqual(
        `<path style="fill: #96DED1;" transform="matrix(0.317274, 0, 0, 0.24623, -63.813007, -36.903751)" d="M 369.571 392 A 370 370 0 1 1 369.571 762 A 270.746 270.746 0 1 0 369.571 392 Z" shape="crescent 690 577 370 300 0.7 1@fdacdeae"></path>`
      );
    });
  });

  describe("Heart", () => {
    it("Should render the `selected color` with the correct hexadecimal code for our Heart SVG file code.", () => {
      const shape = new Heart();
      const colorText = "Navajo White";
      const colorHex = selectHex(colorText);
      shape.hexLogo = colorHex;
      expect(shape.render()).toEqual(
        `<path d="M 227.387 39.567 C 218.018 29.889 205.161 24.559 191.182 24.559 C 180.734 24.559 171.166 27.705 162.741 33.909 C 158.492 37.04 154.639 40.871 151.242 45.343 C 147.849 40.872 143.995 37.04 139.744 33.909 C 131.321 27.705 121.753 24.559 111.305 24.559 C 97.325 24.559 84.467 29.889 75.098 39.567 C 65.84 49.132 60.74 62.199 60.74 76.364 C 60.74 90.941 66.445 104.286 78.693 118.36 C 89.648 130.951 105.396 143.731 123.632 158.53 C 129.86 163.585 136.917 169.313 144.246 175.416 C 146.182 177.032 148.669 177.922 151.242 177.92 C 153.816 177.921 156.3 177.032 158.237 175.418 C 165.566 169.315 172.628 163.583 178.857 158.527 C 197.092 143.73 212.838 130.951 223.795 118.359 C 236.043 104.286 241.747 90.942 241.747 76.362 C 241.747 62.199 236.647 49.132 227.387 39.567 Z M 227.387 39.567" fill="#FFDEAD;" style=""></path>`
      );
    });
  });

  describe("Witch", () => {
    it("Should render the `selected colors` with the correct hexadecimal code for our Witch SVG file code.", () => {
      const shape = new Witch();
      const colorText = "Eggshell";
      const colorShape = "Onyx";
      const hexText = selectHex(colorText);
      const hexShape = selectHex(colorShape);
      shape.hexLogo = hexShape;
      shape.hexText = hexText;
      expect(shape.render()).toEqual(
        `<path style="fill: #353935; stroke: rgb(0, 0, 0); transform-box: fill-box; transform-origin: 50% 50%;" transform="matrix(-0.194923, 0.002747, -0.002556, -0.181278, -571.580017, -336.600952)" d="M 462.623 268.5 A 348 348 0 1 1 462.623 616.5 A 254.648 254.648 0 1 0 462.623 268.5 Z" shape="crescent 764 442.5 348 300 0.7 1@d485325e"></path>
    <path style="fill: #353935; stroke: rgb(0, 0, 0); transform-box: fill-box; transform-origin: 50% 50%;" transform="matrix(0.306554, -0.007664, 0.006844, 0.273799, -1307.453003, -333.67807)" d="M 1163.814 326 A 230 230 0 1 1 1163.814 556 A 168.302 168.302 0 1 0 1163.814 326 Z" shape="crescent 1363 441 230 300 0.7 1@871811df"></path>
    <polygon points="147.128 53.616 109.354 159.646 203.787 91.968 90.467 91.968 184.902 159.646" style="fill: #353935; stroke: #F0EAD6; stroke-width: 5; fill-rule: nonzero;"></polygon>`
      );
    });
  });
});
