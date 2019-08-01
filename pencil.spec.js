const Pencil = require("./pencil");
const Paper = require("./paper");

const properties = {
  pointDuribility: 40000
};

const note = new Paper();
const shoppingList = new Paper("apples");
const pencil = new Pencil(properties);

describe("Pencil Class", () => {
  describe("Constructor method", () => {
    test("it constructs a new pencil object with specified properties", () => {
      expect(pencil.pointDuribility).toBe(40000);
    });

    test("it constructs a new pencil object with default properties", () => {
      const defaultPencil = new Pencil();
      expect(defaultPencil.pointDuribility).toBe(0);
    });
  });

  describe("Write method", () => {
    test("it appends text to the content of the paper", () => {
      const reminder = "finish the kata as soon as possible";
      const items = " ,oranges, milk, cereal, bread, eggs";
      pencil.write(reminder, note);
      pencil.write(" ,oranges, milk, cereal, bread, eggs", shoppingList);
      expect(note.content).toBe(reminder);
      expect(shoppingList.content).toBe(
        "apples ,oranges, milk, cereal, bread, eggs"
      );
    });
  });
});
