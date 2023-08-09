const colors = require("./colorList.js");

function renderColorList() {
  let colorList = [];

  for (const key in colors) {
    colorList.push(`${key}`);
  }

  renderColorList.prototype.colorList = colorList;
  return;
}

module.exports = renderColorList;
