/**
 * A course page body that contains the course and lecture information and a presentation of material relevant to the specific student
 * @author Daniel Runge Petersen
 * @returns HTML body for a course and its lecture material
 */
function coursehtml(path, dbObject) {
    const materialObj = [
        {
            MaterialID: 1,
            MaterialName: "Matrix in youtube",
            MaterialDescription: "Read pages 24-29"
        }
        ,
        {
            MaterialID: 2,
            MaterialName: "Matrix multi in facebook",
            MaterialDescription: "Read something on facebook"
        }
        ,
        {
            MaterialID: 3,
            MaterialName: "Matrix multi in reddit",
            MaterialDescription: "HREF youtube"
        }];

    const learningGoalObjDummy = [
        {
            LearningGoalID: 1,
            LearningGoalName: "Multiplikation"
        }
        ,
        {
            LearningGoalID: 2,
            LearningGoalName: "Vektorregning"
        }];

    const tagsObj = [
        {
            LearningGoalID: 1,
            MaterialID: 2
        }
        ,
        {
            LearningGoalID: 1,
            MaterialID: 3
        }];

    const content = `
    <main class="course">
        <div class="course-container">
           ${courseDescriptionhtml(path)} 
                ${lectureOverviewhtml(dbObject)}

        </div>
        <div class="lecture-container">
            <h1>${path}</h1>
            <div class="lecture">
                <h3>OK</h3>
    <table>
        <thead>
            <tr>
                <th>Material/link</th>
                <th>Fit</th>
            </tr>
        </thead>
        <tbody>
           ${createMaterialTableHmtl(materialObj, learningGoalObjDummy, tagsObj)}
            <tr>
                <td>
                    <a target="_blank" href="https://www.youtube.com/watch?v=4VqmGXwpLqc"
                        class="material">Merge
                        Sort</a>
                </td>
                <td>
                    <div class="like-dislike">
                        <input type="submit" class="dislike" value="dislike">
                        <input type="submit" value="like">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div> 
    </main>

</body>

</html>`;
    return content;
}

function courseDescriptionhtml(course) {
    return '<h1>' + course + '</h1>';
}

function createLessonArray(result) {
    let lessonArray = [];
    result.map((lesson) => {
        const lessonObject = {
            lessonID: lesson.LessonID,
            lessonNumber: lesson.LessonNumber,
            lessonName: lesson.Lessonname
        };

        let checker = false;
        lessonArray.map(existingElement => {
            if (existingElement.lessonID == lessonObject.lessonID) {
                checker = true;
            }
        });

        if (checker == false) {
            lessonArray.push(lessonObject);
        }
    });
    console.log(lessonArray);
    return lessonArray;
}
function createLearningGoalArray(result)
{
    let learningGoalArray = [];
    result.map((learningGoal) => {
        const learningGoalObject = {
            learningGoalID: learningGoal.LearningGoalID,
            lessonID: learningGoal.LessonID,
            learningGoalName: learningGoal.LearningGoalName
        };

        let checker = false;
        learningGoalArray.map(existingElement => {
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


//In my database it is written Lessonname !!! IT SHOULD BE LessonName !!!
function lectureOverviewhtml(dbObject) {
    let content = ``;
    const lectures = createLessonArray(dbObject);
    const learningGoals = createLearningGoalArray(dbObject);
    lectures.forEach(lecture => {
        content += `<h3>${lecture.lessonNumber}. ${lecture.lessonName}</h3>`;
        content += `<ol>`

        learningGoals.forEach(learningGoal => {
            if (learningGoal.lessonID === lecture.lessonID) {
                content += `<li>${learningGoal.learningGoalName}</li>`
            }
        })

        content += `</ol>`
    });
    return content;
}

function createMaterialTableHmtl(materialObj, learningGoalObj, tagsObj) {
    let text = ``;
    materialObj.forEach(individualMaterial => {
        text += `<tr>
                <td>${individualMaterial.MaterialDescription}</td>
                <td>
                <div class="like-dislike">
                <input type="submit" class="dislike" value="dislike">
                <input type="submit" value="like">
                </div>
                </td>
                </tr>`
    });
    return text;
}
module.exports = { coursehtml };