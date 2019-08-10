const PencilPointError = require("../errors").PencilPointError;
const PencilFullPointError = require("../errors").PencilFullPointError;

const validatePencil = pencil => {
  const { fullPoint, point } = pencil;
  if (!fullPoint || fullPoint < 0) {
    throw PencilFullPointError;
  }

  if (isNaN(point) || point === null || point < 0 || point > fullPoint) {
    throw PencilPointError;
  }
};

module.exports = validatePencil;
