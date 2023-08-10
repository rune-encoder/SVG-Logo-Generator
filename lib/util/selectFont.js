// Loads modules from fontList.js (Where our font list is stored)
const fonts = require("./fontList.js");

// Function obtains font code from the font list.
const selectFont = function (chosenFont) {
  // Goes through our object's key value pairs from colorList.js
  // Picks the value (font code) from key (chosen font) that we chose in our questions.
  for (const key in fonts) {
    if (`${key}` === chosenFont) {
      // Returns our chosen font's code.
      return `${fonts[key]}`;
    }
  }
};

module.exports = selectFont;
