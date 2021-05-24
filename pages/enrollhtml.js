const { createCourseCatalogHtml } = require("./util/courseCatalog");

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
            <section class="other-link">
                <div>
                    <h3>Return to profile</h3>
                    <p>Click here to return to your profile page</p>
                </div>
                <a class="circle-button" href="/profile"><i class='bx bx-log-in'></i></a>
            </section>
        </div>
    </main >
    </body >
    </html >`;

  return content;
}

module.exports = { enrollhtml };
