const write = require("./").write;

const pencil = {};
const paper = {};
const text = "Let's start writing";

describe("write", () => {
  describe("instructs pencil to write on a sheet of paper", () => {
    test("", () => {
      expect(() => {
        write(pencil, paper, text);
      }).toThrow("Pencil Is Dull");
    });
  });
});
