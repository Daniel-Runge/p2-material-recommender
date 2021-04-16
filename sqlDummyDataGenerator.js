const { sqlConstructorMaterial, sqlConstructorCourse, sqlConstructorLesson, sqlConstructorLearningGoal, sqlConstructorTags, queryToSqlDb } = require("./sqlDbQuery")

function generateMaterial() {
    const material = {
        Active: Math.random().toFixed(2),
        Reflective: Math.random().toFixed(2),
        Sensing: Math.random().toFixed(2),
        Intuitive: Math.random().toFixed(2),
        Visual: Math.random().toFixed(2),
        Verbal: Math.random().toFixed(2),
        Sequential: Math.random().toFixed(2),
        Global: Math.random().toFixed(2)
    };
    return material;
}

function generateLesson(lessonNr) {
    const lessonList = [
        'Course introduction and introduction to web-programming',
        'JavaScript Functions and Objects',
        'Web-sites med HTML5, Forms, HTTP basics',
        'Exercise session on JS+HTML',
        'Client-side scripting: DOM, Events, fetch ',
        'Asynkronitet, Promises, Fetch',
        'Server side programming with Node.JS ',
        'Web-services and Web-APIs ',
        'Introduction to networks and the Internet protocol stack',
        'The application layer protocols',
        'The transport layer protocols and reliable communication',
        'TCP and Using the transport layer in programs: Sockets programming',
        'Network security, TLS, HTTPS'
    ];
    const lesson = {
        LessonNumber: lessonNr + 1,
        Lessonname: lessonList[lessonNr],
        CourseID: 4
    };
    return lesson;
}

function GenerateLearningGoals(value) {
    const LearningGoalNameArray = [
        'IWP Web arkitekturen',
        'Node.js',
        'Javascript basic programming'
    ];
    const learningGoal = {
        LearningGoalName: LearningGoalNameArray[value],
        LessonID: 1
    };
    return learningGoal;
}

function GenerateTags(LearningGoalID, MaterialID) {
    const tags = {
        LearningGoalID,
        MaterialID
    };
    return tags;
}

for (let i = 1; i < 25; i++) {
    console.log(GenerateTags(2, i));
    let sql = sqlConstructorTags(GenerateTags(2, i))
    queryToSqlDb(sql, (result) => console.log('succes', result));
}

//Creates learninggoals for lesson 1 based on lessonID
// for (let i = 0; i < 3; i++) {
//     console.log(GenerateLearningGoals(i));
//     let sql = sqlConstructorLearningGoal(GenerateLearningGoals(i));
//     queryToSqlDb(sql, (result) => console.log('succes', result));
// }

// Creates lessons for IWP based on courseID
// for (let i = 0; i < 13; i++) {
//     let sql = sqlConstructorLesson(generateLesson(i));
//     queryToSqlDb(sql, (result) => console.log('succes', result));
//     console.log(generateLesson(i));
// }

// Creates courses
// for (let i = 0; i < 5; i++) {
//     const nameList = ['ALG', 'SLIAL', 'DTG', 'IWP', 'PBL'];
//     let sql = sqlConstructorCourse(nameList[i]);
//     queryToSqlDb(sql, (result) => console.log('succes', result));
// }

//Creates Material
// for (let i = 0; i < 50; i++) {
//     let sql = sqlConstructorMaterial(generateMaterial());
//     queryToSqlDb(sql, (result) => console.log('succes', result));
// }