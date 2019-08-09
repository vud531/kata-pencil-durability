const PencilPointError = require("./errors").PencilPointError;
const PencilFullPointError = require("./errors").PencilFullPointError;
const write = require("./").write;

const pencil = {};
const paper = {};
const text = "Let's start writing";

describe("write", () => {
  describe("validate the pencil object before writing on the sheet of paper", () => {
    test("throws an err when the pencil fullPoint is undefined", () => {
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilFullPointError);
    });

    test("throws an err when the pencil fullPoint is null", () => {
      pencil.fullPoint = null;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilFullPointError);
    });

    test("throws an err when the pencil fullPoint is 0", () => {
      pencil.fullPoint = 0;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilFullPointError);
    });

    test("throws an err when the pencil point is undefined", () => {
      pencil.fullPoint = 100;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilPointError);
    });

    test("throws an err when the pencil point is null", () => {
      pencil.point = null;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilPointError);
    });

    test("throws an err when the pencil point is undefined", () => {
      pencil.point = 0;
      expect(() => {
        write(pencil, paper, text);
      }).toThrow(PencilPointError);
    });

    // test("when the paper has no content property, creates an empty content, then writes the text to content", () => {
    //   pencil.point = 10;
    //   write(pencil, paper, text);
    //   expect(paper.content).toBe(text);
    //   expect(pencil.point).toBe(text.)
    // });
  });
});
