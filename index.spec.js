const PencilPointError = require("./errors").PencilPointError;
const PencilFullPointError = require("./errors").PencilFullPointError;
const write = require("./").write;

const pencil = {};
const paper = {};
const text = "Let's start writing";

describe("write", () => {
  describe("validate the pencil object before writing on the sheet of paper", () => {
    beforeEach(() => {});

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
  });

  describe("instructs a pencil to write on a sheet of paper", () => {
    describe("when the paper has no content property, creates an empty content, then writes the text to content", () => {
      test("the paper's content is equal to the new text", () => {
        pencil.point = 20;
        write(pencil, paper, text);
        expect(paper.content).toBe(text);
      });

      test("the pencil's point degrades", () => {
        expect(pencil.point).toBe(2);
      });
    });

    describe("the pencil goes dull when point property reach 0 value", () => {});
  });
});
