const {
  coursehtml,
  courseDescriptionhtml,
  createLearningGoalArray,
  createLessonArray,
  createMaterialDatastructure,
  createMaterialTableHmtl,
  C2_20RecommendationAlgoritmen,
  lectureOverviewhtml,
} = require("../pages/coursehtml");

describe("Return HTML for course page", () => {
  test("Works on correct input", () => {
    const lessonObject = [
      {
        LessonNumber: 2,
        LessonName: "komme1",
        LearningGoalID: 2,
        LessonID: 2,
        LearningGoalName: "huh",
      },
      {
        LessonNumber: 2,
        LessonName: "Ddasdf",
        LearningGoalID: 2,
        LessonID: 1,
        LearningGoalName: "Hje",
      },
      {
        LessonNumber: 1,
        LessonName: "Nej",
        LearningGoalID: 1,
        LessonID: 3,
        LearningGoalName: "Tak",
      },
      {
        LessonNumber: 3,
        LessonName: "Top",
        LearningGoalID: 1,
        LessonID: 3,
        LearningGoalName: "Per",
      },
      {
        LessonNumber: 3,
        LessonName: "Top",
        LearningGoalID: 1,
        LessonID: 4,
        LearningGoalName: "Per",
      },
    ];
    const objectMaterial = [
      {
        MaterialID: 1,
        MaterialName: "DummyMat1",
        MaterialDescription: "Wooow",
        Sensing: 1,
        Intuitive: 1,
        Visual: 1,
        Verbal: 1,
        Active: 1,
        Reflective: 1,
        Sequential: 1,
        Global: 1,
        LearningGoalID: 1,
      },
      {
        MaterialID: 2,
        MaterialName: "DummyMat2",
        MaterialDescription: "Wooow",
        Sensing: 1,
        Intuitive: 1,
        Visual: 1,
        Verbal: 1,
        Active: 1,
        Reflective: 1,
        Sequential: 1,
        Global: 1,
        LearningGoalID: 1,
      },
      {
        MaterialID: 3,
        MaterialName: "DummyMat3",
        MaterialDescription: "Wooow",
        Sensing: 1,
        Intuitive: 1,
        Visual: 1,
        Verbal: 1,
        Active: 1,
        Reflective: 1,
        Sequential: 1,
        Global: 1,
        LearningGoalID: 2,
      },
    ];
    let url = new URL("http://localhost/");
    let params = new URLSearchParams(url.search);
    params.set("lesson", 2);
    const content = coursehtml("Test", lessonObject, params, objectMaterial);
    expect(content).toBe(`
    <main class=\"course\">
        <div class=\"course-container\">
           <h1>Test</h1>
           <h3>Lessons</h3>
           <button class="lectureButton" onclick="activateButton(1)">1. Nej</button>
<button class="lectureButton" onclick="activateButton(2)">2. komme1</button>
<button class="lectureButton" onclick="activateButton(2)">2. Ddasdf</button>
<button class="lectureButton" onclick="activateButton(3)">3. Top</button>

        </div>
        <div class=\"lecture-container\">
            <h1>Lesson 2</h1>
            <div class=\"lecture\">
                <h3></h3>
    <table>
        <thead>
            <tr>
                <th>Material/link</th>
                <th>Fit</th>
            </tr>
        </thead>
        <tbody><tr>
            <td>DummyMat3</td>
            <td>
            <div class="like-dislike">
            <input id = 3 type="submit" class="dislike" value="dislike">
            <input id = 3 type="submit" value="like">
            </div>
            </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
    </main>
<script>
function activateButton(number){
    let urlParams = new URLSearchParams();
    urlParams.set(\"lesson\", number);
    window.location.href = \"/course/SLIAL\" + \"?\" + urlParams.toString();
}
</script>
</body>

</html>`);
  });
});

// describe('The function to generates a material table', () => {
//     test('Works on correct input', () => {

//     })
// })
