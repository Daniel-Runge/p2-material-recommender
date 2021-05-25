const { createToken } = require("../helpers/jwtLogin");
const { coursehtml } = require("../pages/coursehtml");

describe("Return HTML for course page", () => {
  test("Works on correct input", () => {
    const lessonObject = [
      {
        LearningGoalID: 4,
        LearningGoalName: "Memory",
        LessonID: 2,
        LessonNumber: 2,
        LessonName: "InsertionSort",
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
        LearningGoalID: 5,
        LearningGoalName: "Memory analysis",
        LessonID: 2,
        LessonNumber: 2,
        LessonName: "MergeSort",
        CourseID: 1,
      },
    ];
    const objectMaterial = [
      {
        MaterialID: 1,
        MaterialName: "CLRS",
        MaterialDescription: "Page 29",
        SensingLike: 12,
        IntuitiveLike: 473,
        VisualLike: 13,
        VerbalLike: 55,
        ActiveLike: 22,
        ReflectiveLike: 261,
        SequentialLike: 367,
        GlobalLike: 5,
        SensingDislike: 7,
        IntuitiveDislike: 379,
        VisualDislike: 3,
        VerbalDislike: 47,
        ActiveDislike: 1,
        ReflectiveDislike: 212,
        SequentialDislike: 300,
        GlobalDislike: 0,
        LearningGoalID: 1,
      },
      {
        MaterialID: 3,
        MaterialName: "Exercises",
        MaterialDescription: "NA",
        SensingLike: 1,
        IntuitiveLike: 13,
        VisualLike: 21,
        VerbalLike: 1,
        ActiveLike: 32,
        ReflectiveLike: 2,
        SequentialLike: 32,
        GlobalLike: 12,
        SensingDislike: 1,
        IntuitiveDislike: 1,
        VisualDislike: 1,
        VerbalDislike: 1,
        ActiveDislike: 2,
        ReflectiveDislike: 4,
        SequentialDislike: 6,
        GlobalDislike: 1,
        LearningGoalID: 2,
      },
      {
        MaterialID: 2,
        MaterialName: "YouTube",
        MaterialDescription: "MergeSort",
        SensingLike: 33,
        IntuitiveLike: 451,
        VisualLike: 55,
        VerbalLike: 64,
        ActiveLike: 9,
        ReflectiveLike: 264,
        SequentialLike: 353,
        GlobalLike: 4,
        SensingDislike: 3,
        IntuitiveDislike: 393,
        VisualDislike: 12,
        VerbalDislike: 41,
        ActiveDislike: 4,
        ReflectiveDislike: 191,
        SequentialDislike: 267,
        GlobalDislike: 1,
        LearningGoalID: 1,
      },
    ];
    const token = createToken({
      email: "test@test.com",
      perception: 9,
      input: 1,
      processing: 5,
      understanding: -7,
    });
    let url = new URL("http://localhost:3000/course/ALG?lesson=1");
    let params = new URLSearchParams(url.search);
    const content = coursehtml(
      "ALG",
      lessonObject,
      params,
      objectMaterial,
      token
    );
    expect(content).toBe(`
    <main class="course">
        <div class="course-container">
           <h1>ALG</h1>
           <h3>Lessons</h3>
           <button class="lectureButton" onclick="activateButton('lesson', 1)">1. MergeSort</button>
<button class="lectureButton" onclick="activateButton('lesson', 2)">2. InsertionSort</button>

        </div>
        <div class="lecture-container">
            <h1>Lesson 1</h1>
            <div class="lecture">
                <h3></h3>
    <table>
        <thead>
            <tr>
                <th>Material/link</th>
                <th>Fit</th>
            </tr>
        </thead>
        <tbody><tr>
            <td>undefined</td>
            <td>
            <div class="like-dislike">
            <form action="" method="POST">
                <input type="hidden" name="materialID" value="undefined" required>
                <input name="submit" value="Like" type="submit"></input>
            </form>
            <form action="" method="POST">
            <input type="hidden" name="materialID" value="undefined" required>
            <input class="dislike" name="submit" value="Dislike" type="submit"></input>
            </form>
            </div>
            </td>
            </tr><tr>
            <td>undefined</td>
            <td>
            <div class="like-dislike">
            <form action="" method="POST">
                <input type="hidden" name="materialID" value="undefined" required>
                <input name="submit" value="Like" type="submit"></input>
            </form>
            <form action="" method="POST">
            <input type="hidden" name="materialID" value="undefined" required>
            <input class="dislike" name="submit" value="Dislike" type="submit"></input>
            </form>
            </div>
            </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
    </main>
<script>
function activateButton(name, number){
  let urlParams = new URLSearchParams();
  urlParams.set(name, number);
  window.location.href = "/course/ALG" + "?" + urlParams.toString();
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
