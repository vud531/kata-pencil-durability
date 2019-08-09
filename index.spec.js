const PencilPointError = require("./errors").PencilPointError;
const PencilFullPointError = require("./errors").PencilFullPointError;
const write = require("./").write;

const pencil = {};
const paper = {};
const text = "Let's start writing";

describe("write", () => {
  describe("instructs a pencil to write on a sheet of paper", () => {
    test("throws an err if pencil fullPoint is undefined", () => {
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilFullPointError);
    });

    test("throws an err if pencil fullPoint is null", () => {
      pencil.fullPoint = null;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilFullPointError);
    });

    test("throws an err if pencil fullPoint is 0", () => {
      pencil.fullPoint = 0;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilFullPointError);
    });

    test("throws an err if pencil point is undefined", () => {
      pencil.fullPoint = 100;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilPointError);
    });

    test("throws an err if pencil point is null", () => {
      pencil.point = null;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilPointError);
    });

    test("throws an err if pencil point is undefined", () => {
      pencil.point = 0;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilPointError);
    });
  });
});
