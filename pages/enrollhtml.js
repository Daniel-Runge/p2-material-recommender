const { courseCardhtml } = require("./util/courseCard")

/**
 * Creates the html for course catalog. UNTESTED
 * @authors Lars Hansen & Mads Nissum
 * @param {Object} courses is an object containing courseIDs & courseNames
 * @returns html string
 */
function enrollhtml(courses) {
    const courseCards = createCourseCatalogHtml(courses);
    const content = `
    <main class="profile">
        <div class="courses-container">
            <h1>Course Catalog</h1>
            ${courseCards}
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

    return content;
}
/**
 * Helper function for addCoursehtml
 * @authors Lars Hansen & Mads Nissum
 * @param {Object} courses is an object containing courseIDs & courseNames
 * @returns a html string
 */
function createCourseCatalogHtml(courses) {
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
        <input type="submit" value="Enroll"></input>
        </form>`
        return string;
    }
}

module.exports = { enrollhtml };