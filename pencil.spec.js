const Pencil = require("./pencil");

describe("Pencil Class", () => {
  describe("Constructor method", () => {
    test("it constructs a new pencil object with some properties", () => {
      const properties = {
        pointDuribility: 40000
      };
      const pencil = new Pencil(properties);
      expect(pencil.pointDuribility).toBe(40000);
    });
  });
});
