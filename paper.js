class Paper {
  constructor(text = "") {
    this.content = text;
    this.writePosition = 0;
    this.erasePosition = text.length;
  }
}

module.exports = Paper;
