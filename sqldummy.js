const { queryToSqlDb } = require("./sqlDbQuery");

async function dummysql() {
    const path = "SLIAL";
    const mysql = `SELECT * FROM LearningGoals INNER JOIN Lessons ON LearningGoals.LessonID=Lessons.LessonID WHERE CourseID=1`;
    const result = await queryToSqlDb(mysql);
    console.log(result);
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
    console.log(learningGoalArray);
}
dummysql();