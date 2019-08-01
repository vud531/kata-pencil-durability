class Pencil {
  constructor(property = { pointiness: 0, length: 0 }) {
    const { pointiness, pointDurability, length } = property;
    this.POINTINESS = pointiness;
    this.pointDurability = pointiness;
    this.length = length;
  }

  write(text, paper = { content: "" }) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.pointDurability) {
        const char = text[i];
        newText += char;
        char.trim().length &&
          char.toLowerCase() === char &&
          this.pointDurability--;

        if (char.trim().length && char.toLowerCase() !== char) {
          this.pointDurability -= 2;
        }
      } else {
        newText += " ";
      }
    }
    paper.content += newText;
    return paper;
  }

  sharpen() {
    if (this.length) {
      this.pointDurability = this.POINTINESS;
      this.length--;
    }
  }

  erase(text, paper) {}
}

module.exports = Pencil;
