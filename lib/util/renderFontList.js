// Loads modules from fontList.js (Where our font list is stored)
const fonts = require("./fontList");

// Function creates list of fonts that will be used on our questions in the logo generator.
function renderFontList() {
  // Sets our list to an empty Array.
  let fontList = [];
  // Goes through our object's key value pairs from fontList.js
  // Pushes each "key" (color) into a new array.
  for (const key in fonts) {
    fontList.push(`${key}`);
  }
  // Saves our new color array in a prototype.
  renderFontList.prototype.fontList = fontList;
  return;
}

module.exports = renderFontList;
