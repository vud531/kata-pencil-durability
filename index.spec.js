const PencilPointError = require("./errors").PencilPointError;
const PencilFullPointError = require("./errors").PencilFullPointError;
const write = require("./").write;

const pencil = {};
const paper = {};
const text = "Let's start writing";
const whiteSpaceText = "\n\t\r";

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
    describe("when paper's content is undefined, assignt an empty string to the it", () => {
      test("the paper's content is equal to the new text", () => {
        pencil.point = 20;
        write(pencil, paper, text);
        expect(paper.content).toBe(text);
      });

      test("the pencil's point degrades", () => {
        expect(pencil.point).toBe(2);
      });
    });

    describe("when writing \\n, \\t, \\r", () => {
      test("the size of the paper's content should equal to the current size plus the size of white space text", () => {
        write(pencil, paper, whiteSpaceText);
        expect(paper.content.length).toBe(text.length + whiteSpaceText.length);
      });
      test("the point of pencil should not degrade", () => {
        expect(pencil.point).toBe(2);
      });
    });

    describe("writing causes pencils to go dull", () => {
      // write(pencil, paper, text);
      // expect()
    });
  });
});
