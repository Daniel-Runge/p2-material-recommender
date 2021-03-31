const { htmlHeader } = require('./pages/util/htmlHeader')
const { loginPage } = require('./pages/loginPage')

class Website{
    title;
    csss;
    scripts;
    header;
    constructor(title, csss = [], scripts = []) {
        this.title = title;
        this.csss = csss;
        this.scripts = scripts;
        this.header = htmlHeader(title, csss, scripts);
    }

    // Getters
    getTitle() { return this.title; };
    getCsss() { return this.csss; };
    getScripts() { return this.scripts; };

    // Methods
    home(user) { // This method will return a logged in user to their profile page, and others to the login page
        return profilePage() || loginPage();
    }

    login(){
        return this.header + loginPage();
    }
}

module.exports = { Website };