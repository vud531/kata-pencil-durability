const Pencil = require("./pencil");
const Paper = require("./paper");

const property = {
  pointiness: 100,
  length: 10
};

const draft = new Paper();
const note = new Paper();
const shoppingList = new Paper("apples");
const dullPencil = new Pencil();
const pencil = new Pencil(property);

describe("Pencil Class", () => {
  describe("Constructor method", () => {
    test("it constructs a new pencil object with specified properties", () => {
      const myPencil = new Pencil({ pointiness: 40000, length: 1000 });
      expect(myPencil.pointDurability).toBe(40000);
      expect(myPencil.POINTINESS).toBe(40000);
      expect(myPencil.length).toBe(1000);
    });
  });

  describe("Write method", () => {
    describe("pointy case", () => {
      const reminder = "finish the kata as soon as possible"; //29
      const items = " ,oranges, milk, cereal, bread, eggs"; //31
      pencil.write(reminder, note);
      pencil.write(items, shoppingList);

      test("it appends text to the content of the paper", () => {
        expect(note.content).toBe(reminder);
        expect(shoppingList.content).toBe(
          "apples ,oranges, milk, cereal, bread, eggs"
        );
      });

      test("it degrades the pointiness of pencil", () => {
        const reminderLength = reminder.split("").filter(c => c !== " ").length;
        const itemsLength = items.split("").filter(c => c !== " ").length;
        const expectedLength = 100 - reminderLength - itemsLength;
        expect(pencil.pointDurability).toBe(expectedLength);
        pencil.write(`I AM YELLING`);
        expect(pencil.pointDurability).toBe(expectedLength - 20);
      });

      test("it write different types of whitespace character", () => {
        const whitespace = ` `;
        let tempPaper = pencil.write(whitespace);
        expect(tempPaper.content).toBe(` `);
        const newline = `
        `;
        tempPaper = pencil.write(newline);
        expect(tempPaper.content).toBe(`
        `);

        const tab = "    ";
        tempPaper = pencil.write(tab);
        expect(tempPaper.content).toBe("    ");

        const whitespaces = `\r\n\t`;
        tempPaper = pencil.write(whitespaces);

        expect(tempPaper.content).toBe(`\r\n\t`);
        expect(pencil.pointDurability).toBe(20);
        pencil.write(`\n`, note);
        expect(note.content).toBe(`finish the kata as soon as possible\n`);
        pencil.write(`         `, note);
        expect(note.content).toBe(
          `finish the kata as soon as possible\n         `
        );
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
        expect(dullPencil.pointDurability).toBe(0);
      });
    });
  });

  describe("Sharpen", () => {
    test("it resets the pointDurability of the pencil", () => {
      pencil.sharpen();
      expect(pencil.pointDurability).toBe(100);
    });
    test("it reduce the pencil's length", () => {
      expect(pencil.length).toBe(9);
    });
  });
});
