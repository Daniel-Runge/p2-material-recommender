const navigationbar = require("../pages/util/navigationbar");
const { aboutHtml } = require("./pages/navigationbar");

describe("The function to generate a HTML header", () => {
  test("Works on correct input", () => {
    const actual = navigationbar(
      "isUserLoggedIn"
    );
    expect(navigationbar).toBe(`
    <div class="nav-container">
      <ul class = "navList">
      <li><a href="/about">About</a></li>
       ${isUserLoggedIn ? '<li><a href="/profile">Profile</a></li>' : ""}
       ${isUserLoggedIn ? '<li><a href="/course">Courses</a></li>' : ""}
       ${isUserLoggedIn ?  '<li><a href="/logout">logout</a></li>' : ""}
      </ul>
    </div>
    `);
  }});