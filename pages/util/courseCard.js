/**
 * This function returns a HTML card based on a course object.
 * @author Daniel Runge Petersen, Lars Emanuel Hansen, Mads Overgaard Nissum & Raymond Kacso
 * @param {object} course
 * @returns A courseCard div to be placed in the profile of a user or a course catalogue
 */
function courseCardhtml(course) {
  // Design inspiration from https://codepen.io/FlorinPop17/pen/dyPvNKK
  const card = `
    <div class="courseCard">
        <a class="course-preview">
            <h3 class="course-title">${course.Coursename}</h3>
            <h4>Number of Lectures</h4>
            <input name="${course.CourseID}" type="checkbox">Enroll</input>
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

function enrolledInCourseCardsHtml(enrolledIn){
  const content = `
  <div class="courseCard">
      <a class="course-preview">
          <h3 class="course-title">${enrolledIn.Coursename}</h3>
          <h4>Number of Lectures</h4>
      </a>
    <div class="course-info">
        <p>Description</p>
    </div>
  </div>
  `;
  return content;
}

module.exports = { courseCardhtml, enrolledInCourseCardsHtml };
