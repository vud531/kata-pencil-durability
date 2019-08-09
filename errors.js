const PencilPointError = {
  name: "PencilPointError",
  message:
    "the point value of this pencil must be a positive integer and less than or equal to the fullPoint value"
};

const PencilFullPointError = {
  name: "PencilFullPointError",
  message: "the fullPoint value of this pencil must be a positive integer"
};

module.exports = {
  PencilPointError,
  PencilFullPointError
};
