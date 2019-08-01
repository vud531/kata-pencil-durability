const Paper = require("./paper");

describe("Paper Class", () => {
  describe("Constructor method", () => {
    test("it constructs a new paper object with a specified text", () => {
      const paper = new Paper("She sells sea shells");
      expect(paper.content).toBe("She sells sea shells");
    });

    test("it constructs a new paper object with an empty text", () => {
      const paper = new Paper();
      expect(paper.content).toBe("");
    });
  });
});
