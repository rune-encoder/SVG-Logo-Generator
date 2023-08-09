const createSVG = ({ shapeSVG, hexText }) =>
  `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  <text x="150" y="125" text-anchor="middle" font-size="60" font-family='san-serif', fill="${hexText}"></text>
</svg>
`;

module.exports = createSVG;
