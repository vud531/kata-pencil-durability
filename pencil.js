class Pencil {
  constructor(property = { pointiness: 0, length: 0, eraser: 0 }) {
    const { pointiness, length, eraser } = property;
    this.POINTINESS = pointiness;
    this.point = pointiness;
    this.length = length;
    this.eraser = eraser;
  }

  write(text, paper = { content: "" }) {
    let content = "";

    for (let i = 0; i < text.length; i++) {
      const pointNotDull = this.point;
      if (pointNotDull) {
        const char = text[i];
        const charNotEmpty = char.trim().length;
        const charIsLowerCase = char.toLowerCase() === char;

        content += char;

        if (charNotEmpty && charIsLowerCase) {
          this.point--;
        }

        if (charNotEmpty && !charIsLowerCase) {
          this.point -= 2;
        }
      } else {
        content += " ";
      }
    }
    paper.content += content;
    return paper;
  }

  sharpen() {
    const pencilOutOfLength = !this.length;
    if (pencilOutOfLength) throw new Error("Pencil Out Of Length");

    const pencilFullySharpened = this.point === this.POINTINESS;
    if (pencilFullySharpened) {
      throw new Error("Pencil Fully Sharpened");
    }

    if (!pencilOutOfLength) {
      this.point = this.POINTINESS;
      this.length--;
      return;
    }
  }

  erase(occurence, paper) {
    const index = paper.content.lastIndexOf(occurence);
    const occurenceNotFound = index === -1;
    if (occurenceNotFound) throw new Error("Occurence Not Found");

    let newContent = paper.content.substring(0, index);

    for (let i = 0; i < occurence.length; i++) {
      const charNotEmpty = paper.content[index];
      const PencilCanErase = this.eraser;
      if (charNotEmpty && PencilCanErase) {
        newContent += " ";
        this.eraser--;
      } else {
        newContent += paper.content[index];
      }
    }

    newContent += paper.content.slice(index + occurence.length);
    paper.content = newContent;
  }
}

module.exports = Pencil;
