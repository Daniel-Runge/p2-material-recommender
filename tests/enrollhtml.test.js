const { createCourseCatalogHtml, enrollhtml } = require("../pages/enrollhtml");

describe("The function to generate html for enroll page", () => {
  const course = [
    {
      CourseID: 1,
      Coursename: "SLIAL",
    },
  ];

  const emptyCourse = [];

  test("Works on correct input with courses", () => {
    const actual = enrollhtml(course);
    expect(actual).toBe(`
    <main class=\"profile\">
        <div class=\"courses-container\">
            <h1>Course Catalog</h1>
            <p>Below you can see the courses you can follow. click the courses you want to follow and add them to your profile.</p><form action=\"/enroll\" method=\"POST\">function Error() { [native code] }<input type=\"submit\" value=\"Enroll\"></input>
          </form>
        </div >
        <div class=\"right-side\">
            <section class=\"other-link\">
                <div>
                    <h3>Return to profile</h3>
                    <p>Click here to return to your profile page</p>
                </div>
                <a class=\"circle-button\" href=\"/profile\"><i class='bx bx-log-in'></i></a>
            </section>
        </div>
    </main >
    </body >
    </html >`);
  });

  test("Works on correct input without courses", () => {
    const actual = enrollhtml(emptyCourse);
    expect(actual).toBe(`
    <main class=\"profile\">
        <div class=\"courses-container\">
            <h1>Course Catalog</h1>
            <p>Looks like you are enrolled in all available courses</p>
        </div >
        <div class=\"right-side\">
            <section class=\"other-link\">
                <div>
                    <h3>Return to profile</h3>
                    <p>Click here to return to your profile page</p>
                </div>
                <a class=\"circle-button\" href=\"/profile\"><i class='bx bx-log-in'></i></a>
            </section>
        </div>
    </main >
    </body >
    </html >`);
  });
});
