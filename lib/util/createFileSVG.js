// The createFileSVG.js will create the code for the SVG logo.
// It will be invoked in the final step in generateLogo.js.
// The shape's code, text color, inputed text, and font style will be passed through.

const createSVG = ({ shapeSVG, finalTextColor, text, font }) =>
  `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Astloch&family=Ballet:opsz@16..72&family=Cherish&family=Grenze+Gotisch:wght@200&family=Handjet:wght@300&family=Roboto&family=Sofia+Sans+Condensed:wght@300&family=Ysabeau+Infant:wght@300&family=Ysabeau+Office&family=Ysabeau+SC:wght@300&family=Yuji+Boku&display=swap" rel="stylesheet">

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  <text x="150" y="125" text-anchor="middle" font-size="60" font-family='${font}', fill="${finalTextColor}">${text}</text>
</svg>
`;

module.exports = createSVG;
