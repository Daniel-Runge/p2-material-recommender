const mysql = require("mysql");
const jwt = require("jsonwebtoken");


async function sqlLogIn(logInData) {
    const con = mysql.createConnection({
        host: process.env.DATABASE_HOST || "localhost",
        user: process.env.DATABASE_USER || "root",
        password: process.env.DATABASE_PASSWORD || "Zenen3ka!",
        database: process.env.DATABASE || "dB",
    });
    console.log("log in", logInData);
    //try {
        const { username, password } = logInData.value;
        //WIP
        con.query(`SELECT * FROM users WHERE Email= ?`, [username], (error, result) => {
            if (!result || password !== result[0].UserPassword) {
                console.log("Error with the password or email");
            } else {
                const id = result[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log(token);

                console.log("The password and email are correct");

                return token;
            }
        });
    //} catch (error) {
    //    console.log(error);
    //}
}

module.exports = { sqlLogIn };