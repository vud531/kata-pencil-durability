const validatePencil = require("./helpers/pencilValidator");

const isDull = pencil => {
  return pencil.point <= 0;
};
const isEmpty = char => {
  char.trim() === "";
};
const isLowerCase = char => {
  return !isEmpty(char) && char.toLowerCase() === char;
};

const isUpperCase = char => {
  return !isEmpty(char) && char.toLowerCase() !== char;
};

const write = (pencil, paper, text) => {
  validatePencil(pencil);

  if (!paper.content) {
    paper.content = "";
  }

  text.split("").forEach((char, index) => {
    if (!isDull(pencil)) {
      paper.content += char;
    } else {
      paper.content += " ";
    }

    if (isLowerCase(char)) {
      pencil.point--;
    } else if (isUpperCase(char)) {
      pencil.pont -= 2;
    }
  });
};

module.exports = {
  write
};
