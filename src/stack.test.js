const StackClass = require("./stack");

describe("....", () => {
  const stackClass = new StackClass([1, 2, 3, 4, 5]);

  test("take should return the last element", () => {
    stackClass.take().toBe(5);
  });
});
