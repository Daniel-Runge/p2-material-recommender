const { createCourseCards } = require("../pages/profilehtml");

describe("The function to generate html for multiple course cardon profile page", () => {

    const course = [{
      CourseID: 1,
      Coursename: 'SLIAL'
    }];

    test("Works on correct input", () => {
      const actual = createCourseCards(course);
      expect(actual).toBe(`<p>Below you can see all courses you are currently enrolled in. Click the cards for more information</p>
<div class=\"courseCard\">
    <a class=\"course-preview\">
        <h3 class=\"course-title\">SLIAL</h3>
        <h4>Number of Lectures</h4>
    </a>
    <div class=\"course-info\">
        <p>Description</p>
    </div>
</div>
`);
    });
    
    const nullcourse = [];
    
    test("Works on incorrect input", () => {
      const actual = createCourseCards(nullcourse);
      expect(actual).toBe(`<p>Looks like you are not enrolled in any courses. Click the button below to add courses</p>`);
    });
  });