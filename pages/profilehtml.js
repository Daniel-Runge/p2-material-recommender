const { createLearningStyleSliders } = require("./util/sliders");
const { profileCourseCardshtml } = require("./util/courseCard");

/**
 * A profile page body that contains the courses as cards and a slider for the student based on the student information
 * @author Daniel Runge Petersen, Lars Hansen, Mads Overgaard Nissum & Raymond Kacso
 * @param {object} course an object containing information about all courses the student is enrolled in
 * @returns HTML body with the profile page body that contains the courses as cards and sliders, based on the student information
 */
function profilehtml(course) {
  const slidersContainer = createLearningStyleSliders();
  const courseCards = createCourseCards(course);
  const content = `
    <main class="profile">
    <div class="courses-container">
    <h1>Your Courses</h1>
    ${courseCards}
            <a href="/enroll" class=circle-button>
                <i class='bx bx-plus'></i>
            </a>
        </div>
        <div class="right-side">
            <section class="details-container">
                <h2 class="profile-name">Daniel</h2>
                ${slidersContainer}
            </section>
            <section class="ils-link">
                <div>
                    <h3>Take the test</h3>
                    <p>Follow the link to take the ILS test.</p>
                </div>
                <a class="circle-button" href="https://www.webtools.ncsu.edu/learningstyles/" /><i class='bx bx-log-in'></i></a>
            </section>
        </div>
    </main>
</body>
</html>`;
  return content;
}
/**
 * Helper function for profilehtml
 * @author Lars Hansen & Mads Nissum
 * @param {Object} courses is an object containing courseIDs & courseNames
 * @returns a html string
 */
function createCourseCards(courses) {
  let content = ``;
  if (!courses?.length) {
    content =
      "<p>Looks like you are not enrolled in any courses. Click the button below to add courses</p>";
    return content;
  } else {
    content = `<p>Below you can see all courses you are currently enrolled in. Click the cards for more information</p>`;
    courses.map((course) => {
      content += profileCourseCardshtml(course);
    });
    return content;
  }
}

module.exports = { profilehtml, createCourseCards };
