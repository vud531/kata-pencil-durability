class Pencil {
  constructor(property = { pointiness: 0, length: 0, eraser: 0 }) {
    const { pointiness, length, eraser } = property;
    this.POINTINESS = pointiness;
    this.point = pointiness;
    this.length = length;
    this.eraser = eraser;
  }

  write(text, paper = { content: "" }) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.point) {
        const char = text[i];
        newText += char;
        char.trim().length && char.toLowerCase() === char && this.point--;

        if (char.trim().length && char.toLowerCase() !== char) {
          this.point -= 2;
        }
      } else {
        newText += " ";
      }
    }
    paper.content += newText;
    return paper;
  }

  sharpen() {
    if (!this.length) throw new Error("Pencil Out Of Length");

    if (this.point === this.POINTINESS)
      throw new Error("Pencil Already Sharpened");

    if (this.length) {
      this.point = this.POINTINESS;
      this.length--;
      return;
    }
  }

  erase(text, paper) {}
}

module.exports = Pencil;
