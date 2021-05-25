const { createToken } = require("../helpers/jwtLogin");
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
        LearningGoalID: 1,
        LearningGoalName: "Run time analysis",
        LessonID: 1,
        LessonNumber: 1,
        LessonName: "MergeSort",
        CourseID: 1,
      },
      {
        LearningGoalID: 2,
        LearningGoalName: "Memory analysis",
        LessonID: 1,
        LessonNumber: 1,
        LessonName: "MergeSort",
        CourseID: 1,
      },
      {
        LearningGoalID: 3,
        LearningGoalName: "Run time",
        LessonID: 2,
        LessonNumber: 2,
        LessonName: "InsertionSort",
        CourseID: 1,
      },
      {
        LearningGoalID: 4,
        LearningGoalName: "Memory",
        LessonID: 2,
        LessonNumber: 2,
        LessonName: "InsertionSort",
        CourseID: 1,
      },
    ];
    const objectMaterial = [
      {
        MaterialID: 1,
        MaterialName: "CLRS",
        MaterialDescription: "Page 29",
        Sensing: 0.5,
        Intuitive: 0.4,
        Visual: 0.2,
        Verbal: 0.9,
        Active: 0.8,
        Reflective: 0.9,
        Sequential: 0,
        Global: 1,
        LearningGoalID: 1,
      },
      {
        MaterialID: 2,
        MaterialName: "Youtube",
        MaterialDescription: '"Video on MergeSort"',
        Sensing: 0.3,
        Intuitive: 0.9,
        Visual: 0.95,
        Verbal: 0.7,
        Active: 0.3,
        Reflective: 0.8,
        Sequential: 0.8,
        Global: 0.8,
        LearningGoalID: 1,
      },
      {
        MaterialID: 3,
        MaterialName: "CLRS",
        MaterialDescription: "Page 18",
        Sensing: 0.6,
        Intuitive: 0.1,
        Visual: 0.5,
        Verbal: 0.98,
        Active: 0.3,
        Reflective: 0.9,
        Sequential: 0.9,
        Global: 0.6,
        LearningGoalID: 3,
      },
    ];
    const token = createToken({
      email: "test@test.com",
      perception: 9,
      input: 1,
      processing: 5,
      understanding: -7,
    });
    let url = new URL("http://localhost/");
    let params = new URLSearchParams(url.search);
    params.set("lesson", 1);
    const searchParams = new URLSearchParams(url.search);
    const content = coursehtml(
      "ALG",
      lessonObject,
      searchParams,
      objectMaterial,
      token
    );
    expect(content).toBe(`
    <main class=\"course\">
        <div class=\"course-container\">
           <h1>ALG</h1>
           <h3>Lessons</h3>
           <button class="lectureButton" onclick="activateButton(1)">1. <button class="lectureButton" onclick="activateButton(1)">1. MergeSort</button>
           + <button class="lectureButton" onclick="activateButton(2)">2. InsertionSort</button>

        </div>
        <div class=\"lecture-container\">
            <h1>Lesson Home page</h1>
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
    window.location.href = \"/course/Test\" + \"?\" + urlParams.toString();
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
