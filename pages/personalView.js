const { checkPersonalCourse, getPersonalCourse } = require("../sqlDummyDataGenerator")

const Email = 'nissum_10@hotmail.com';

personalCoursehtml(Email);

function personalCoursehtml(Email) {
    let string = ''

    console.log(getPersonalCourse(checkPersonalCourse(Email)));

    return string;
}