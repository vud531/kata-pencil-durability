const PencilPointError = require("../errors").PencilPointError;
const PencilFullPointError = require("../errors").PencilFullPointError;

const validatePencil = pencil => {
  if (!pencil.fullPoint) {
    throw PencilFullPointError;
  }

  if (!pencil.point) {
    throw PencilPointError;
  }
};

module.exports = validatePencil;
