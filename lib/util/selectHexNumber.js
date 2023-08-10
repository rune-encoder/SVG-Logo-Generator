// Loads modules from colorList.js (Where our color list is stored)
const colors = require("./colorList.js");

// Function obtains hexadecimal number of the color we chose from our color list.
const selectHexNumber = function (selectColor) {
  // Goes through our object's key value pairs from colorList.js
  // Picks the value (hexadecimal number) from key (chosen color) that we chose in our questions.
  for (const key in colors) {
    if (`${key}` === selectColor) {
      // Returns our chosen color's Hexadecimal number equivalent.
      return `${colors[key]}`;
    }
  }
};

module.exports = selectHexNumber;
