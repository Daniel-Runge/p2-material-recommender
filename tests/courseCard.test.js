const { profileCourseCardshtml, enrollCourseCardhtml } = require("../pages/util/courseCard");

describe("The function to generate html for a course card on profile page", () => {

    const course = {
        CourseID: 1,
        CourseName: "Jest Test Course",
    };

    const courseNull = {
        CourseID: 1,
        CourseName: null,
    };

    test("Works on correct input", () => {
        const actual = profileCourseCardshtml(course);
        expect(actual).toBe(`
    <div class="courseCard">
        <a href="course/Jest Test Course/" class="course-preview">
            <h3 class="course-title">Jest Test Course</h3>
            <h4>Number of Lectures</h4>
        </a>
        <div class="course-info">
            <p>Description</p>
        </div>
    </div>`);
    });

    test("Works on incorrect input", () => {
        const actual = profileCourseCardshtml(courseNull);
        expect(actual).toBe(Error);
    });

    test("Works on incorrect input", () => {
        const actual = profileCourseCardshtml(null);
        expect(actual).toBe(Error);
    });
});

describe("The function to generate html for a course card on enroll page", () => {
    
    const course = {
        CourseID: 1,
        CourseName: "Jest Test Course",
    };

    const courseNull = {
        CourseID: null,
        CourseName: null,
    };

    test("Works on correct input", () => {
        const actual = enrollCourseCardhtml(course);
        expect(actual).toBe(`
    <div class="courseCard">
        <a class="course-preview">
            <h3 class="course-title">Jest Test Course</h3>
            <h4>Number of Lectures</h4>
            <input name="1" type="checkbox">Enroll</input>
        </a>
        <div class="course-info">
            <p>Description</p>
        </div>
    </div>`)
    });

    test("Works on incorret input", () => {
        const actual = enrollCourseCardhtml(courseNull);
        expect(actual).toBe(Error)
    });

    test("Works on incorret input", () => {
        const actual = enrollCourseCardhtml(null);
        expect(actual).toBe(Error)
    });
});