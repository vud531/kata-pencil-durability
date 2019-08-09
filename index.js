const PencilPointError = require("./errors").PencilPointError;
const PencilFullPointError = require("./errors").PencilFullPointError;

const write = (pencil, paper, text) => {
  if (!pencil.fullPoint) {
    throw PencilFullPointError;
  }
  if (!pencil.point) {
    throw PencilPointError;
  }
};

module.exports = {
  write
};
