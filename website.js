const { htmlHeader } = require("./pages/util/htmlHeader");
const { loginhtml } = require("./pages/loginhtml");
const { signuphtml } = require("./pages/signuphtml");
const { profilehtml } = require("./pages/profilehtml");
const { sqlConstructorSignUp } = require("./sqlDbQuery");
const { sqlLogIn } = require("./sqlLogIN");



class Website {
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
    getTitle() {
        return this.title;
    }
    getCsss() {
        return this.csss;
    }
    getScripts() {
        return this.scripts;
    }

    // Methods
    //   home(res) {
    //     // This method will return a logged in user to their profile page, and others to the login page
    //     return loginPage(res);
    //   }

    loginPage(res) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(this.header + loginhtml());
        res.end();
    }

    signupPage(res) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(this.header + signuphtml());
        res.end();
    }

    profilePage(res) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(this.header + profilehtml());
        res.end();
    }

    signup(req, res) {
        //placeholder
        let signUpObject;
        res.setHeader("Content-Type", "application/json");
        let data = "";
        req.on("data", (chunk) => {
            data += chunk
            console.log(data);
        });
        req.on("end", () => {
            console.log("server gets", JSON.parse(data))
            console.log('we did it!');
            signUpObject = JSON.parse(data);
            console.log("works until sqlconstructor");
            sqlConstructorSignUp(signUpObject);
            res.end();
        });
    }
    login(req, res) {
        let logInObject;
        let data = "";
        req.on("data", (chunk) => {
            data += chunk
            console.log(data);
        });
        req.on("end", () => {
            console.log("server gets", JSON.parse(data));
            logInObject = JSON.parse(data);
            console.log("works until sqlconstructor");
            let loginSuccess = sqlLogIn(logInObject);

            if (!loginSuccess) {
                console.log("if not loginSUCCESS");
                this.loginPage(res);
                res.end();
            } else {
                console.log("else ok");
                console.log("why is this not working");
                this.profilePage(res);
                res.end();
            }
        });
    }
}

module.exports = { Website };