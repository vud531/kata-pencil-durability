const PencilPointError = {
  name: "PencilPointError",
  message: "this pencil is dull or broken"
};

const PencilFullPointError = {
  name: "PencilFullPointError",
  message: "this pencil must have a positive fullPoint value"
};

module.exports = {
  PencilPointError,
  PencilFullPointError
};
