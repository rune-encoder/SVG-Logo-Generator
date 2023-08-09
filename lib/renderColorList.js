const colors = require("./colorList");

const renderColorList = function () {
  let colorList = [];

  for (const key in colors) {
    colorList.push(key);
  }
  renderColorList.prototype.colorList = colorList;
  return;
};

module.exports = renderColorList;
