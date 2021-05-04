/**
 * This function returns a HTML card based on a course object.
 * @author Daniel Runge Petersen, Lars Emanuel Hansen, Mads Overgaard Nissum & Raymond Kacso
 * @param {object} course A single course parsed into the function
 * @returns A course card div to be placed in the enroll tab of a users profile
 */
function enrollCourseCardhtml(course) {
  // Design inspiration from https://codepen.io/FlorinPop17/pen/dyPvNKK
  const card = `<div class="courseCard">
        <a class="course-preview">
            <h3 class="course-title">${course.Coursename}</h3>
            <h4>Number of Lectures</h4>
            <input name="${course.CourseID}" type="checkbox">Enroll</input>
        </a>
        <div class="course-info">
            <p>Description</p>
            </div>
            </div>`;
  return card;
}

/**
 * This function returns a HTML card based on a course object.
 * @author Mads Overgaard Nissum & Lars Emanuel Hansen
 * @param {object} course A single course parsed into the function
 * @returns  A course card div to be placed on the profile page of the user
 */
function profileCourseCardshtml(course){
  const content = `
  <div class="courseCard">
      <a href="course/${course.Coursename}/" class="course-preview">
          <h3 class="course-title">${course.Coursename}</h3>
          <h4>Number of Lectures</h4>
      </a>
    <div class="course-info">
        <p>Description</p>
    </div>
  </div>
  `;
  return content;
}

module.exports = { enrollCourseCardhtml, profileCourseCardshtml };
