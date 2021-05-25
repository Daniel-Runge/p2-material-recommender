const {
  calculateScore,
  byPersonalScore,
  recommendationAlgo,
} = require("../recommendation");
const { createToken, verifyToken } = require("../helpers/jwtLogin");
const { formatMaterials } = require("../dataFormatting");

/**
 * A course page body that contains the course and lecture information and a presentation of material relevant to the specific student
 * @author Daniel Runge Petersen, Gustav Graversen and Raymond Kacso
 * @param {string} path The course on which the user has clicked(SLIAL, IWP...)
 * @param {object} dbObject A query from "async coursePage" which has LearningGoals and Lessons depending on the CourseID
 * @param {string} searchParams Upon clicking one of the lessons searchParams ("lesson=x")is appended to the website's url
 * @param {object} materialDb A query from "async coursePage" which has Materials with the same ID as the TagID
 * @returns HTML body for a course and its lecture material
 */
function coursehtml(path, dbObject, searchParams, materialDb, token) {
  console.log("This is the path", path);
  console.log("This is the params", searchParams.toString());
  console.log(dbObject);
  console.log(materialDb);
  const content = `
    <main class="course">
        <div class="course-container">
           ${courseDescriptionhtml(path)}
           <h3>Lessons</h3>
           ${lectureOverviewhtml(dbObject)}
        </div>
        <div class="lecture-container">
            <h1>Lesson ${searchParams?.get("lesson") || "Home page"}</h1>
            <div class="lecture">
                <h3></h3>
    <table>
        <thead>
            <tr>
                <th>Material/link</th>
                <th>Fit</th>
            </tr>
        </thead>
        <tbody>${createMaterialTableHmtl(
          searchParams?.get("lesson"),
          materialDb,
          dbObject,
          token
        )}
        </tbody>
    </table>
</div>
</div>
    </main>
<script>
function activateButton(name, number){
  let urlParams = new URLSearchParams();
  urlParams.set(name, number);
  window.location.href = window.location.href + "?" + urlParams.toString();
}

</script>
</body>

</html>`;

  return content;
}

/**
 * courseDescriptionhtml gives the name of the course in the course container
 * @author Gustav Graversen and Raymond Kacso
 * @param {string} course name of the course
 * @returns an html string containing the name of the course, which is used in coursehtml
 */
function courseDescriptionhtml(course) {
  return "<h1>" + course + "</h1>";
}
/**
 * This function extracts relevant object elements from the query "mysql" and makes a new array with the selected object elements
 * @author Gustav Graversen and Raymond Kacso
 * @param {array of objects} DbQueryData DbQueryData is the query made in "async coursePage" for the const mysql.
 * @returns {array of objects}  lessonArray - An array of objects with lessonID, lessonNumber and lessonName as elements
 */
function createLessonArray(DbQueryData) {
  let lessonArray = [];
  DbQueryData.forEach((lesson) => {
    const lessonObject = {
      lessonID: lesson.LessonID,
      lessonNumber: lesson.LessonNumber,
      lessonName: lesson.LessonName,
    };

    let checker = false;
    lessonArray.forEach((existingElement) => {
      if (existingElement.lessonID == lessonObject.lessonID) {
        checker = true;
      }
    });

    if (checker == false) {
      lessonArray.push(lessonObject);
    }
  });
  lessonArray.sort((a, b) => {
    if (a.lessonNumber > b.lessonNumber) return 1;
    if (b.lessonNumber > a.lessonNumber) return -1;
    return 0;
  });

  return lessonArray;
}

/**
 * This function extracts relevant object elements from the query "mysql" and makes a new array with the selected object elements
 * @author Gustav Graversen and Raymond Kacso
 * @param {array of objects} DbQueryData DbQueryData is the query made in "async coursePage" for the const mysql.
 * @returns {array of objects} learningGoalArray - An array of objects with learningGoalID, lessonID,
 * learningGoalName and lessonNumber as elements
 */
function createLearningGoalArray(DbQueryData) {
  let learningGoalArray = [];
  DbQueryData.forEach((learningGoal) => {
    const learningGoalObject = {
      learningGoalID: learningGoal.LearningGoalID,
      lessonID: learningGoal.LessonID,
      learningGoalName: learningGoal.LearningGoalName,
      lessonNumber: learningGoal.LessonNumber,
    };
    let checker = false;
    learningGoalArray.map((existingElement) => {
      if (existingElement.learningGoalID == learningGoalObject.learningGoalID) {
        checker = true;
      }
    });

    if (checker == false) {
      learningGoalArray.push(learningGoalObject);
    }
  });

  return learningGoalArray;
}
/**
 * This function checks for the lessonNumber on which the user has clicked. It also checks for the learningGoalID to ensure that it
 * coincides with the material.learningGoalID. It then pushes into an empty array which is then handled by the recommendation algorithm
 * @author Gustav Graversen and Raymond Kacso
 * @param {array of objects} materialDb It contains the elements of the object Material plus LearningGoalID
 * @param {array of objects} learningGoalArray It is created in createLearningGoalArray
 * @param {number} number An integer which is contains the lesson number
 * @returns {array of objects} materialDatastructure - An array of objects which contains the material that is best suited for the user
 */
function createMaterialDatastructure(
  materialDb,
  learningGoalArray,
  number,
  token
) {
  console.log("Course Token here!", verifyToken(token));
  //there may be a better implementation to this function
  materialDatastructure = [];
  learningGoalArray.forEach((learningGoal) => {
    if (learningGoal.lessonNumber == number) {
      let temporaryArray = [];
      materialDb.forEach((material) => {
        if (material.LearningGoalID === learningGoal.learningGoalID) {
          temporaryArray.push(material);
        }
      });
      materialDatastructure = materialDatastructure.concat(
        C2_20RecommendationAlgoritmen(verifyToken(token).user, temporaryArray)
      );
    }
  });
  return materialDatastructure;
}

/**
 *
 * @param {array of objects} input the array of objects from createMaterialDatastructure
 * @returns {array of objects} input - for now the algortihm has not been implemented in the code
 */
function C2_20RecommendationAlgoritmen(user, materials) {
  let newUser = {
    perception: user.perception,
    input: user.input,
    processing: user.processing,
    understanding: user.understanding,
  };
  sortedBestMaterials = recommendationAlgo(newUser, formatMaterials(materials));
  return sortedBestMaterials;
}
/**
 * This function displays the amount of lessons that are in the "course-container" in the form of buttons depending on the database data
 * @author Gustav Graversen and Raymond Kacso
 * @param {array of objects} dbObject A datastructure made in a query made in "async coursePage" on "mysql"
 * @returns {string} content - the amount of buttons that are to be created depending on the lessons
 */
function lectureOverviewhtml(dbObject) {
  let content = ``;
  const lectures = createLessonArray(dbObject);
  const learningGoals = createLearningGoalArray(dbObject);
  lectures.forEach((lecture) => {
    // What is commented in this function is the learningGoals that could be displayed. For now only the lessons are displayed

    content += `<button class="lectureButton" onclick="activateButton('lesson', ${lecture.lessonNumber})">${lecture.lessonNumber}. ${lecture.lessonName}</button>\n`;
    // content += `<ol>`

    // learningGoals.forEach(learningGoal => {
    //     if (learningGoal.lessonID === lecture.lessonID) {
    //         content += `<li>${learningGoal.learningGoalName}</li>`
    //     }
    // })

    // content += `</ol>`
  });
  return content;
}
/**
 * This function creates a string for the client-side which contains the list of materials which are made in the function createMaterialDatastructure
 * @param {number} lessonNumber the number of the lesson on which the user has clicked
 * @param {array of objects} materialDb It contains the elements of the object Material plus LearningGoalID
 * @param {array of objects} dbObject A datastructure made in a query made in "async coursePage" on "mysql"
 * @returns {string} text - html string that displays the materials and the like/dislike buttons
 */
function createMaterialTableHmtl(lessonNumber, materialDb, dbObject, token) {
  let text = ``;

  const learningGoals = createLearningGoalArray(dbObject);
  const materials = createMaterialDatastructure(
    materialDb,
    learningGoals,
    lessonNumber,
    token
  );

  materials.forEach((material) => {
    text += `<tr>
            <td>${material?.MaterialName}</td>
            <td>
            <div class="like-dislike">
            <form action="/dislike" method="POST">
              <input id = ${material?.MaterialID} type="submit" class="dislike" value="dislike">
            </form>
            <form action="/like" method="POST">
              <input id = ${material?.MaterialID} type="submit" value="like">
              </form>
            </div>
            </td>
            </tr>`;
  });
  return text;
}

module.exports = {
  coursehtml,
  courseDescriptionhtml,
  createLearningGoalArray,
  createLessonArray,
  createMaterialDatastructure,
  createMaterialTableHmtl,
  C2_20RecommendationAlgoritmen,
  lectureOverviewhtml,
};
