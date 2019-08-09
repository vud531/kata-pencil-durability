const write = (pencil, paper, text) => {
  if (pencil && !pencil.point) {
    throw new Error("Pencil Is Dull");
  }
};

module.exports = {
  write
};
