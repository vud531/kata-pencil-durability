const write = require("./").write;

const pencil = {};
const paper = {};
const text = "Let's start writing";

describe("write", () => {
  describe("instructs a pencil to write on a sheet of paper", () => {
    test("throws an err if pencil point is undefined", () => {
      expect(() => {
        write(pencil, paper, text);
      }).toThrow("Pencil Is Dull");
    });

    test("throws an err if pencil point is null", () => {
      pencil.point = null;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow("Pencil Is Dull");
    });

    test("throws an err if pencil point is undefined", () => {
      pencil.point = 0;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow("Pencil Is Dull");
    });
  });
});
