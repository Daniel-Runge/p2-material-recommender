/**
 * This function returns a HTML card based on a course object.
 * @author Daniel Runge Petersen, Lars Hansen & Raymond Kacso
 * @param {object} course
 * @returns A courseCard div to be placed in the profile of a user or a course catalogue
 */
function courseCardhtml(course) {
  // Design inspiration from https://codepen.io/FlorinPop17/pen/dyPvNKK
  const card = `
    <div class="courseCard">
        <a class="course-preview" href="/course/${course.CourseID}">
            <h3 class="course-title">${course.Coursename}</h3>
            <h4>Number of Lectures</h4>
            <input name="${course.Coursename}" type="checkbox">Check</input>
        </a>
        <div class="course-info">
            <p>Description</p>
            </div>
            </div>
    `;
  return card;

  // header/titel
  // beskrivelse
  // link
  // eventuelt image
}

module.exports = { courseCardhtml };
