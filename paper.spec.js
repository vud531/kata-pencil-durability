const Paper = require("./paper");
const Pencil = require("./pencil");

const properties = {
  pointDuribility: 40000
};

const pencil = new Pencil(properties);

describe("Paper Class", () => {
  describe("Constructor method", () => {
    test("it constructs a new paper object with a specified text", () => {
      const text = "She sells sea shells";
      const paper = new Paper(text);
      expect(paper.content).toBe("She sells sea shells");
      expect(paper.writePosition).toBe(0);
      expect(paper.erasePosition).toBe(text.length);
    });

    test("it constructs a new paper object with an empty text", () => {
      const paper = new Paper();
      expect(paper.content).toBe("");
      expect(paper.writePosition).toBe(0);
      expect(paper.erasePosition).toBe(0);
    });
  });
});
