const {
  generateUpdateMaterialQuery,
} = require("../helpers/generateUpdateMaterialQuery");

describe("The function updateMaterial", () => {
  test("Works on correct input", () => {
    const data = { materialID: 1, submit: "Like" };
    const user = { perception: 9, input: 1, processing: 5, understanding: -7 };
    const actual = generateUpdateMaterialQuery(data, user);
    expect(actual).toBe(
      "UPDATE Material SET IntuitiveLike = IntuitiveLike + 9, VerbalLike = VerbalLike + 1, ReflectiveLike = ReflectiveLike + 5, SequentialLike = SequentialLike + 7 WHERE MaterialID = 1;"
    );
  });
});
