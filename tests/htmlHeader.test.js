const { htmlHeader } = require("../pages/util/htmlHeader");

describe("HTML header generation function", () => {
  test("Testing on correct input", () => {
    const actual = htmlHeader("Test Title", ["style.css"], ["spy.js"]);
    expect(actual).toBe(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test Title</title>
        <link rel="stylesheet" href="style.css">

        <script defer src="spy.js"></script>

    </head>`);
  });

  test("Testing on no input", () => {
    const actual = htmlHeader();
    expect(actual).toBe(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Title</title>
        ${""}
        ${""}
    </head>`);
  });

  test("Testing on undefined input", () => {
    const actual = htmlHeader(undefined, undefined, undefined);
    expect(actual).toBe(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Title</title>
        ${""}
        ${""}
    </head>`);
  });
});
