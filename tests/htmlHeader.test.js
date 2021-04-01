/**
 * This is an illustratory test to showcase how to use the Jest testing framework
 * - Import the unit or units to be tested
 * - Wrap all tests of each challenged unit inside a description
 * - Elaborate on the specific test cases
 * - Compare the actual value and the expected value with an assertion
 * - Done!
 */
const { htmlHeader } = require("../pages/util/htmlHeader");

describe("The function to generate a HTML header", () => {
  test("Works on correct input", () => {
    const actual = htmlHeader(
      "Test Title",
      ["style.css"],
      ["spy.js", "happy.js"]
    );
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
<script defer src="happy.js"></script>

    </head>
    <body>
      <header>
        <div class="nav-container">
            <h2>Navigation will come here</h1>
        </div>
        <a href="https://www.aau.dk/">
            <img class="logo" src="images/logo_en.png" alt="AAU logo">
        </a>
      </header>`);
  });

  test("Corrects a common mistake in input type", () => {
    const actual = htmlHeader("Corrections!", "style.css", "spy.js");
    expect(actual).toBe(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Corrections!</title>
        <link rel="stylesheet" href="style.css">

        <script defer src="spy.js"></script>

    </head>
    <body>
      <header>
        <div class="nav-container">
            <h2>Navigation will come here</h1>
        </div>
        <a href="https://www.aau.dk/">
            <img class="logo" src="images/logo_en.png" alt="AAU logo">
        </a>
      </header>`);
  });

  test("Works correctly without input", () => {
    const actual = htmlHeader();
    expect(actual).toBe(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Untitled</title>
        ${""}
        ${""}
    </head>
    <body>
      <header>
        <div class="nav-container">
            <h2>Navigation will come here</h1>
        </div>
        <a href="https://www.aau.dk/">
            <img class="logo" src="images/logo_en.png" alt="AAU logo">
        </a>
      </header>`);
  });

  test("Nullish values are handled", () => {
    const actual = htmlHeader(null, null, null);
    expect(actual).toBe(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Untitled</title>
        ${""}
        ${""}
    </head>
    <body>
      <header>
        <div class="nav-container">
            <h2>Navigation will come here</h1>
        </div>
        <a href="https://www.aau.dk/">
            <img class="logo" src="images/logo_en.png" alt="AAU logo">
        </a>
      </header>`);
  });
});
