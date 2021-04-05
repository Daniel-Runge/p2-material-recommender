const { createLearningStyleSliders } = require('./util/Sliders')

function ILSLink() {
    const content = `
    <section class="ils-link">
        <div>
            <h3>Take the test</h3>
            <p>Follow the link to take the ILS test.</p>
        </div>
        <a class="circle-button" href="https://www.webtools.ncsu.edu/learningstyles/" /><i class='bx bx-log-in'></i></a>
    </section>`;
    return content;
}

function htmlCard() {
    const card = `
    <div class="courseCard">
        <a href="#" class="course-preview">
            <h3 class="course-title">Title of course</h3>
            <h4>lecture #</h4>
        </a>

        <div class="course-info">
            <p>Random course description for the course.</p>
        </div>
    </div>
    `;
    return card;

    // header/title
    // beskrivelse
    // link
    // eventueltImage

}

function coursesTable() {
    const content = `
    <div class="courses-container">
        <table>
            <tr>
                <th>Your Courses:</th>
            </tr>
            <tr>
                <td>Algorithms</td>
            </tr>
            <tr>
                <td>Sandsynligheds Teori</td>
            </tr>
            <tr>
                <td>Din Mor</td>
            </tr>
        </table>
        <a class=cirle-button>
        </a>
        <input type="submit" value="Course finished">
    </div>`;
    return content;
}

function profilehtml() {
    const card = htmlCard();
    const coursesContainer = coursesTable();
    const slidersContainer = createLearningStyleSliders();
    const ILSContainer = ILSLink();
    const content = `
    <main class="profile">
        <div class="courses-container">
            <h1>courses</h1>
            <p>Below you can see the courses you follow. Use the 'plus' button to add more courses from the brochure</p>
            ${card}
            ${card}
            ${card}
            <a href="#" class=circle-button>
                <i class='bx bx-plus'></i>
            </a>
        </div>
        <div class="right-side">
            <section class="details-container">
                <h2 class="profile-name">Lars Hansen</h2>
                ${slidersContainer}
            </section>
            ${ILSContainer}
        </div>
    </main>

</body>
</html>`;
    return content;
}

module.exports = { profilehtml };