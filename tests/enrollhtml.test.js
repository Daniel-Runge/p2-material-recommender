const { createCourseCatalogHtml, enrollhtml } = require("../pages/enrollhtml");

describe("The function to generate the html page for enroll", () => {

  const course = [{
    CourseID: 1,
    Coursename: 'SLIAL'
  }];

  test("Works on correct input", () => {
    const actual = enrollhtml(course)
    expect(actual).toBe(`
    <main class="profile">
        <div class="courses-container">
            <h1>Course Catalog</h1>
            ${createCourseCatalogHtml(course)}
        </div >
        <div class="right-side">
            <section class="details-container">
                <h2 class="profile-name">Daniel</h2>
            </section>
            <section class="ils-link">
                <div>
                    <h3>Return to profile</h3>
                    <p>Click here to return to your profile page</p>
                </div>
                <a class="circle-button" href="/profile"><i class='bx bx-log-in'></i></a>
            </section>
        </div>
    </main >
    </body >
    </html >`)
  });

});

describe("The function to generate html for multiple course card on enroll page", () => {

    const course = [{
      CourseID: 1,
      Coursename: 'SLIAL'
    }];

    test("Works on correct input", () => {
      const actual = createCourseCatalogHtml(course);
      expect(actual).toBe(`<p>Below you can see the courses you can follow. click the courses you want to follow and add them to your profile.</p><form action="/enroll" method="POST"><div class="courseCard">
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
    
    const nullcourse = [null];
    
    test("Works on incorrect input", () => {
      const actual = createCourseCatalogHtml(nullcourse);
      expect(actual).toBe(`<p>Looks like you are enrolled in all available courses</p>`);
    });
  });