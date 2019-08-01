class Paper {
  constructor(text = "") {
    this.content = text;
    this.writePosition = text.length;
    this.erasePosition = text.length;
  }
}

module.exports = Paper;
