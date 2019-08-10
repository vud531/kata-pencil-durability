const PencilPointError = {
  name: "PencilPointError",
  message:
    "the point value of this pencil must be zero or a positive integer and cannot be greater than fullPoint value"
};

const PencilFullPointError = {
  name: "PencilFullPointError",
  message:
    "the fullPoint value of this pencil must be a positive integer and cannot be less than the point value"
};

module.exports = {
  PencilPointError,
  PencilFullPointError
};
