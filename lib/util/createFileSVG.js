// The createFileSVG.js will create the code for the SVG logo.
// It will be invoked in the final step in generateLogo.js.
// The shape's code, text color, inputed text, and font style will be passed through.

const createSVG = ({ shapeSVG, finalTextColor, text, font, fontSVG }) =>
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" text-anchor="middle">
  <style>
  ${fontSVG}
  </style>
  ${shapeSVG}
  <text x="150" y="125" text-anchor="middle" font-size="60" font-family='${font}' fill="${finalTextColor}">${text}</text>
  </svg>`;

module.exports = createSVG;
