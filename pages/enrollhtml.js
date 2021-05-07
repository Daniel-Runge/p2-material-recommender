const { enrollCourseCardhtml } = require("./util/courseCard");

/**
 * Creates the html for course catalog. UNTESTED
 * @authors Lars Hansen & Mads Nissum
 * @param {Object} courses is an object containing courseIDs & courseNames
 * @returns html string
 */
function enrollhtml(courses) {
  const courseCards = createCourseCatalogHtml(courses);
  const content = `
    <main class="profile">
        <div class="courses-container">
            <h1>Course Catalog</h1>
            ${courseCards}
        </div >
        <div class="right-side">
            <section class="other-link">
                <div>
                    <h3>Return to profile</h3>
                    <p>Click here to return to your profile page</p>
                </div>
                <a class="circle-button" href="/profile"><i class='bx bx-log-in'></i></a>
            </section>
        </div>
    </main >
    </body >
    </html >`;

  return content;
}
/**
 * Helper function for enrollhtml
 * @authors Lars Hansen & Mads Nissum
 * @param {Object} courses is an object containing courseIDs & courseNames
 * @returns a html string
 */
function createCourseCatalogHtml(courses) {
  console.log(courses);
  let content =
    "<p>Below you can see the courses you can follow. click the courses you want to follow and add them to your profile.</p>";
  if (!courses?.length) {
    content = "<p>Looks like you are enrolled in all available courses</p>";
    return content;
  } else {
    content += `<form action="/enroll" method="POST">`;
    courses.map((course) => {
      console.log(course);
      content += enrollCourseCardhtml(course);
    });
    content += `<input type="submit" value="Enroll"></input>
        </form>`;
    return content;
  }
}

module.exports = { enrollhtml, createCourseCatalogHtml };
