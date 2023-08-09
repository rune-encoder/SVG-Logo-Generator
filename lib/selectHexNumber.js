const colors = require("./colorList");

const selectHexNumber = function (selectColor) {
  for (const key in colors) {
    if (`${key}` === selectColor) {
      return `${colors[key]}`;
    }
  }
};

module.exports = selectHexNumber;
