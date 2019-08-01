class Pencil {
  constructor(property = { pointDuribility: 0 }) {
    this.pointDuribility = property.pointDuribility;
  }

  write(paper) {}
}

module.exports = Pencil;
