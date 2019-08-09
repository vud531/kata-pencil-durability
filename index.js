const validatePencil = require("./helpers/pencilValidator");

const write = (pencil, paper, text) => {
  validatePencil(pencil);

  if (!paper.content) {
    paper.content = "";
  }

  text.split("").forEach((char, index) => {
    paper.content += char;
    char.trim() === "" && pencil.point--;
  });
};

module.exports = {
  write
};
