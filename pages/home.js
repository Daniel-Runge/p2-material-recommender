// The homepage will be either the login/signup page, or the users dashboard/profile if logged in.
const { htmlHeader } = require('./util/htmlHeader')

htmlHeader("title")
helper();

function homePage (title) {
    const content = `
    <body>
        <h1>${title}</h1>
        <!--  -->
    </body>
    </html>`
    return content
}



module.exports = { homePage };