// Loads modules from colorList.js (Where our color list is stored)
const colors = require("./colorList.js");

// Function creates list of colors that will be used on our questions in the logo generator.
function renderColorList() {
  // Sets our list to an empty Array.
  let colorList = [];
  // Goes through our object's key value pairs from colorList.js
  // Pushes each "key" (color) into a new array.
  for (const key in colors) {
    colorList.push(`${key}`);
  }
  // Saves our new color array in a prototype.
  renderColorList.prototype.colorList = colorList;
  return;
}

module.exports = renderColorList;
