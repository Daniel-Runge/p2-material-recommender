const { createCourseCatalogHtml } = require("../pages/enrollhtml");

describe("The function to generate html for multiple course card", () => {
    const course = [{
      CourseID: 1,
      Coursename: 'SLIAL'
    }];
    test("Works on correct input", () => {
      const actual = createCourseCatalogHtml(course);
      expect(actual).toBe(`
<p>Below you can see the courses you can follow. click the courses you want to follow and add them to your profile.</p><form action="/enroll" method="POST"><div class="courseCard">
        <a class="course-preview">
            <h3 class="course-title">SLIAL</h3>
            <h4>Number of Lectures</h4>
            <input name="1" type="checkbox">Enroll</input>
        </a>
        <div class="course-info">
            <p>Description</p>
            </div>
            </div><input type="submit" value="Enroll"></input>
        </form>`);
    });
  });