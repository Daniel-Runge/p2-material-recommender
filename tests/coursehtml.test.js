const { coursehtml,
    courseDescriptionhtml,
    createLearningGoalArray,
    createLessonArray,
    createMaterialDatastructure,
    createMaterialTableHmtl,
    C2_20RecommendationAlgoritmen,
    lectureOverviewhtml } = require("../pages/coursehtml");

describe("It returns the name of the course", () => {


    test("Works on correct input", () => {
        const string = courseDescriptionhtml("Test");
        expect(string).toBe("<h1>Test</h1>");
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