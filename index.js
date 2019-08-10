const validatePencil = require("./helpers/pencilValidator");

const isDull = pencil => {
  return pencil.point <= 0;
};
const isWhiteSpace = str => {
  return str.trim().length === 0;
};
const isLowerCase = char => {
  return /[a-z]/g.test(char);
};

const isUpperCase = char => {
  return /[A-Za]/g.test(char);
};

const write = (pencil, paper, text) => {
  validatePencil(pencil);

  if (!paper.content) {
    paper.content = "";
  }

  if (isWhiteSpace(text)) {
    paper.content += text;
    return;
  }

  let newContent = "";
  for (let i = 0; i < text.length; i++) {
    if (!isDull(pencil)) {
      newContent += text[i];
      if (isLowerCase(text[i])) {
        pencil.point--;
      } else if (isUpperCase(text[i])) {
        pencil.point -= 2;
      } else if (!isWhiteSpace(text[i])) {
        pencil.point--;
      }
    } else {
      newContent += " ";
    }
  }

  paper.content += newContent;
};

module.exports = {
  write
};
