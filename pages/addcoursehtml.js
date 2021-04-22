const { courseCardhtml } = require("./util/courseCard")

function addCoursehtml(courses) {

    const first = `
    <main class="profile">
    <div class="courses-container">
    <h1>Course Catalog</h1>`;

    const courseCards = getCoursesFromDb(courses);

    const end = `

    </div >
    <div class="right-side">
    <section class="details-container">
    <h2 class="profile-name">Daniel</h2>
    </section>
    <section class="ils-link">
    <div>
    <h3>Return to profile</h3>
    <p>Click here to return to your profile page</p>
    </div>
    <a class="circle-button" href="/profile"><i class='bx bx-log-in'></i></a>
    </section>
    </div>
    </main >
    
    </body >
    
    </html >`

    return first + courseCards + end;
}

function getCoursesFromDb(courses) {
    let string = "<p>Below you can see the courses you can follow. click the courses you want to follow and add them to your profile.</p>";
    if (courses.length === 0) {
        string = "<p>Looks like you are enrolled in all available courses</p>"
        return string;
    }
    else {
        string += `<form action="/enroll" method="POST">`
        courses.map(element => {
            string += courseCardhtml(element);
        });
        string += `
        <a type="submit" class=circle-button>
        <i class='bx bx-plus'></i>
        </a>
        
        </form>`
        return string;
    }
}

module.exports = { addCoursehtml };