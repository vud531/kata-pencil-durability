class Pencil {
  constructor(property = { pointDuribility: 0 }) {
    this.pointDuribility = property.pointDuribility;
  }

  write(text, paper = { content: "" }) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.pointDuribility) {
        const char = text[i];
        newText += char;
        if (char !== " ") {
          if (char.toLowerCase() === char) {
            this.pointDuribility--;
          } else {
            this.pointDuribility -= 2;
          }
        }
      } else {
        newText += " ";
      }
    }
    paper.content += newText;
    return paper;
  }
}

module.exports = Pencil;
