const { coursehtml,
    courseDescriptionhtml,
    createLearningGoalArray,
    createLessonArray,
    createMaterialDatastructure,
    createMaterialTableHmtl,
    C2_20RecommendationAlgoritmen,
    lectureOverviewhtml } = require("../pages/coursehtml");

describe("Return HTML for course page", () => {
    test("Works on correct input", () => {
        const lessonObject = [
            {
                lessonNumber: 1,
                lessonName: "IWP"
            },
            {
                lessonNumber: 2,
                lessonName: "SLIAL"
            }
        ]
        const objectMaterial = [
            {
                MaterialID: 1,
                MaterialName: 'DummyMat1',
                MaterialDescription: 'Wooow',
                Sensing: 1,
                Intuitive: 1,
                Visual: 1,
                Verbal: 1,
                Active: 1,
                Reflective: 1,
                Sequential: 1,
                Global: 1,
                LearningGoalID: 1
            },
            {
                MaterialID: 2,
                MaterialName: 'DummyMat2',
                MaterialDescription: 'Wooow',
                Sensing: 1,
                Intuitive: 1,
                Visual: 1,
                Verbal: 1,
                Active: 1,
                Reflective: 1,
                Sequential: 1,
                Global: 1,
                LearningGoalID: 1
            }
        ];
        let url = new URL('http://localhost/')
        let params = new URLSearchParams(url.search)
        params.set("lesson", 2)
        const content = coursehtml("Test", lessonObject, params, objectMaterial);
        expect(content).toBe(`
    <main class=\"course\">
        <div class=\"course-container\">
           <h1>Test</h1>
           <h3>Lessons</h3>
           <button class=\"lectureButton\" onclick=\"activateButton(undefined)\">undefined. undefined</button>
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
        <tbody>
        
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

    })
})

/*describe("It returns the name of the course", () => {
    test("Works on correct input", () => {
        const string = courseDescriptionhtml("Test");
        expect(string).toBe(`<h1>Test</h1>`);
    });
});

describe("It returns an array of objects", () => {
    test("Works on correct input for createLearningGoalArray", () => {
        const dummyObject =
            [
                {
                    LearningGoalID: 1,
                    LessonID: 2,
                    LearningGoalName: "Matrixregning",
                    LessonNumber: 5
                }
            ];
        const result = createLearningGoalArray(dummyObject);
        expect(result).toStrictEqual([
            {
                "learningGoalID": 1,
                "learningGoalName": "Matrixregning",
                "lessonID": 2,
                "lessonNumber": 5
            }
        ]);
    });

    test("Works on correct input for createLessonArray", () => {
        const dummyObject2 =
            [
                {
                    LearningGoalID: 1,
                    LearningGoalName: 'DummyLearn1',
                    LessonID: 1,
                    LessonNumber: 2,
                    LessonName: 'Dummy1',
                    CourseID: 1
                }
            ];
        const result = createLessonArray(dummyObject2);
        expect(result).toStrictEqual([
            {
                "lessonID": 1,
                "lessonName": "Dummy1",
                "lessonNumber": 2
            }
        ]);
    });

    test("Works on correct input for createMaterialDatastructure", () => {
        const dummyObjectMaterial = [
            {
                MaterialID: 1,
                MaterialName: 'DummyMat1',
                MaterialDescription: 'Wooow',
                Sensing: 1,
                Intuitive: 1,
                Visual: 1,
                Verbal: 1,
                Active: 1,
                Reflective: 1,
                Sequential: 1,
                Global: 1,
                LearningGoalID: 1
            }
        ];
        const dummyObjectLearningGoal = [
            {
                learningGoalID: 1,
                lessonID: 1,
                learningGoalName: 'DummyLearn1',
                lessonNumber: 2
            }
        ];
        const number = 2;
        const result = createMaterialDatastructure(dummyObjectMaterial, dummyObjectLearningGoal, number);
        expect(result).toStrictEqual([{
            MaterialID: 1,
            MaterialName: 'DummyMat1',
            MaterialDescription: 'Wooow',
            Sensing: 1,
            Intuitive: 1,
            Visual: 1,
            Verbal: 1,
            Active: 1,
            Reflective: 1,
            Sequential: 1,
            Global: 1,
            LearningGoalID: 1
        }]
        );
    })

    test("Gives back the same input for C2_20RecommendationAlgoritmen", () => {
        const result = C2_20RecommendationAlgoritmen([3]);
        expect(result).toStrictEqual([3]);
    });

    test("Works on correct input for createMaterialTableHmtl", () => {
        const dummyObjectMaterial = [
            {
                MaterialID: 1,
                MaterialName: 'DummyMat1',
                MaterialDescription: 'Wooow',
                Sensing: 1,
                Intuitive: 1,
                Visual: 1,
                Verbal: 1,
                Active: 1,
                Reflective: 1,
                Sequential: 1,
                Global: 1,
                LearningGoalID: 1
            }
        ];
        const dummyObject2 =
            [
                {
                    LearningGoalID: 1,
                    LearningGoalName: 'DummyLearn1',
                    LessonID: 1,
                    LessonNumber: 2,
                    LessonName: 'Dummy1',
                    CourseID: 1
                }
            ];
        const number = 2;

        const result = createMaterialTableHmtl(number, dummyObjectMaterial, dummyObject2);
        expect(result).toStrictEqual(`<tr>
            <td>DummyMat1</td>
            <td>
            <div class="like-dislike">
            <input id = 1 type="submit" class="dislike" value="dislike">
            <input id = 1 type="submit" value="like">
            </div>
            </td>
            </tr>`);
    });
    test("Works on correct input for lectureOverview", () => {
        const dummyObject2 =
            [
                {
                    LearningGoalID: 1,
                    LearningGoalName: 'DummyLearn1',
                    LessonID: 1,
                    LessonNumber: 2,
                    LessonName: 'Dummy1',
                    CourseID: 1
                }
            ];
        const result = lectureOverviewhtml(dummyObject2);
        expect(result).toStrictEqual(`<button class="lectureButton" onclick="activateButton(2)">2. Dummy1</button>`)
    });
});
*/