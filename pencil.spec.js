const Pencil = require("./pencil");
const Paper = require("./paper");

const properties = {
  pointDuribility: 40000
};

const draft = new Paper();
const note = new Paper();
const shoppingList = new Paper("apples");
const dullPencil = new Pencil();

describe("Pencil Class", () => {
  describe("Constructor method", () => {
    test("it constructs a new pencil object with specified properties", () => {
      const pencil = new Pencil(properties);
      expect(pencil.pointDuribility).toBe(40000);
    });

    test("it constructs a new pencil object with default properties", () => {
      expect(dullPencil.pointDuribility).toBe(0);
    });
  });

  describe("Write method", () => {
    describe("pointy case", () => {
      const pencil = new Pencil({ pointDuribility: 100 });
      const reminder = "finish the kata as soon as possible"; //29
      const items = " ,oranges, milk, cereal, bread, eggs"; //31
      pencil.write(reminder, note);
      console.log(pencil.pointDuribility);
      pencil.write(items, shoppingList);
      console.log(pencil.pointDuribility);

      test("it appends text to the content of the paper", () => {
        expect(note.content).toBe(reminder);
        expect(shoppingList.content).toBe(
          "apples ,oranges, milk, cereal, bread, eggs"
        );
      });

      test("it degrades the pointiness of pencil", () => {
        const reminderLength = reminder.split("").filter(c => c !== " ").length;
        const itemsLength = items.split("").filter(c => c !== " ").length;
        expect(pencil.pointDuribility).toBe(100 - reminderLength - itemsLength);
      });
    });

    describe("dull case", () => {
      test("it appends a white space to the content of the paper", () => {
        dullPencil.write("I am invisible", draft);
        expect(draft.content).toBe("              ");
        dullPencil.write(" ,butter knife", shoppingList);
        expect(shoppingList.content).toBe(
          "apples ,oranges, milk, cereal, bread, eggs              "
        );
        expect(dullPencil.pointDuribility).toBe(0);
      });
    });
  });
});
