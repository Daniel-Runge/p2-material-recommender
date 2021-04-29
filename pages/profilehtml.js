const { sqlGetValuesForProfile } = require("../sqlDbQuery");
const { createLearningStyleSliders } = require("./util/Sliders");
const { courseCardhtml } = require("./util/courseCard");

/**
 * A profile page body that contains the courses as cards and a slider for the student based on the student information
 * @author Daniel Runge Petersen, Lars Hansen & Raymond Kacso
 * @param {object} studentInformation
 * @returns HTML body with the profile page body that contains the courses as cards and slider for the student based on the student information
 */
async function profilehtml(userEmail) {
  // let courseCards = studentInformation.courses.reduce(
  //   (accumulator, currentValue) => {
  //     return accumulator + courseCardhtml(currentValue);
  //   }
  // );
   //query the data from the database //query the data from the database
   let user; 
   await sqlGetValuesForProfile(userEmail).then(v => {
       user =  v[0];    
   }); 
   
  const slidersContainer = createLearningStyleSliders(user);
  const content = `
  <main class="profile">
      <div class="courses-container">
          <h1>courses</h1>
          <p>Below you can see the courses you follow. Use the 'plus' button to add more courses from the brochure</p>
          <div class="courseCard">
            <a class="course-preview" href="/course/testipop">
            <h3 class="course-title">JS er sejt</h3>
            <h4>Lol</h4>
            </a>
          <div class="course-info">
          <p>Random description</p>
      </div>
  </div>
          <a href="#" class=circle-button>
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

module.exports = { profilehtml };
