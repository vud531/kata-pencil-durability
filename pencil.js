class Pencil {
  constructor(property = { pointDuribility: 0 }) {
    this.POINTINESS = property.pointDuribility;
    this.pointDuribility = property.pointDuribility;
  }

  write(text, paper = { content: "" }) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.pointDuribility) {
        const char = text[i];
        newText += char;
        char.trim().length &&
          char.toLowerCase() === char &&
          this.pointDuribility--;

        if (char.trim().length && char.toLowerCase() !== char) {
          this.pointDuribility -= 2;
        }
      } else {
        newText += " ";
      }
    }
    paper.content += newText;
    return paper;
  }

  sharpen() {
    this.pointDuribility = this.POINTINESS;
  }
}

module.exports = Pencil;
