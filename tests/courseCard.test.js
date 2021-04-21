const { courseCardhtml } = require("../pages/util/courseCard");

describe("The function to generate html for a course card", () => {
  const course = {
    courseID: 1,
    name: "Jest Test Course",
    description: "A course used in testing with the Jest framework",
    numberOfLectures: 4,
  };
  test("Works on correct input", () => {
    const actual = courseCardhtml(course);
    expect(actual).toBe(`
    <div class="courseCard">
        <a class="course-preview" href="/course/1">
            <h3 class="course-title">Jest Test Course</h3>
            <h4>4</h4>
        </a>
        <div class="course-info">
            <p>A course used in testing with the Jest framework</p>
        </div>
    </div>
    `);
  });
});
