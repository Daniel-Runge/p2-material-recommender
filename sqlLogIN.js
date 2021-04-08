const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const con = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "Zenen3ka!",
    database: process.env.DATABASE || "dB",
});

async function sqlLogIn(logInData) {
    console.log("log in", logInData);
    try {
        const { username, password } = logInData.value;
        //WIP
        con.query(`SELECT * FROM users WHERE Email= ?`, [username], async(error, result) => {
            if (!result || password !== result[0].UserPassword) {
                console.log("Error with the password or email");
            } else {
                const id = result[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log(token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                };
                res.cookie("jwt", token, cookieOptions);
                res.status(200).redirect("/profile");
                cookieParser(JWT_SECRET, cookieOptions.expires);
                console.log("The cookie options are this " + cookieOptions);
                console.log("The password and email are correct");

            }

        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sqlLogIn };