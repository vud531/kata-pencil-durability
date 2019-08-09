const PencilPointError = require("./errors").PencilPointError;
const write = (pencil, paper, text) => {
  if (!pencil.point) {
    throw PencilPointError;
  }
};

module.exports = {
  write
};
