const { createToken, verifyToken } = require("../helpers/jwtLogin");

describe("The function creates a token for the user and verifies the content of the token", () => {
  test("Validates a created token", () => {
    //dummy data
    const user = {
      id: 1,
      code: "secret",
      name: "dummy",
    };
    const token = createToken(user.id);
    const tokenVerifier = verifyToken(token);
    expect(tokenVerifier).toBeTruthy();
  });

  test("Valides correctly on nullish input", () => {
    const tokenVerifier = verifyToken(null);
    expect(tokenVerifier).toBe(false);
  });

  test("Valides correctly on undefined input", () => {
    const tokenVerifier = verifyToken(undefined);
    expect(tokenVerifier).toBe(false);
  });

  test("Valides correctly on missing input", () => {
    const tokenVerifier = verifyToken();
    expect(tokenVerifier).toBe(false);
  });

  test("Valides correctly on falsy input ", () => {
    const tokenVerifier = verifyToken(0);
    expect(tokenVerifier).toBe(false);
  });

  test("Valides correctly on wrong input ", () => {
    const tokenVerifier = verifyToken("monkey");
    expect(tokenVerifier).toBe(false);
  });
});
