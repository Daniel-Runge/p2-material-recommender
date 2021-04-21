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
        <a class="course-preview" href="/course/${course.courseID}">
            <h3 class="course-title">${course.name}</h3>
            <h4>${course.numberOfLectures}</h4>
        </a>
        <div class="course-info">
            <p>${course.description}</p>
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
