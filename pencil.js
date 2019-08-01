class Pencil {
  constructor(property = { pointDuribility: 0 }) {
    this.pointDuribility = property.pointDuribility;
  }

  write(text, paper) {
    paper.content += text;
  }
}

module.exports = Pencil;
