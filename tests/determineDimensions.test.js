const { determineDimensions } = require("../helpers/determineDimensions");

describe("The function to determine a users dimensions", () => {
  test("Works on correct input", () => {
    const user = { perception: 9, input: 1, processing: 5, understanding: -7 };
    const actual = determineDimensions(user);
    expect(actual).toEqual({
      Intuitive: 9,
      Reflective: 5,
      Sequential: 7,
      Verbal: 1,
    });
  });
  test("Works on correct input", () => {
    const user = {
      perception: -9,
      input: -1,
      processing: -5,
      understanding: 7,
    };
    const actual = determineDimensions(user);
    expect(actual).toEqual({
      Active: 5,
      Global: 7,
      Sensing: 9,
      Visual: 1,
    });
  });
});
