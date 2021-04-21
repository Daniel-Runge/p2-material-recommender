const env = require("dotenv");
env.config();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");


async function sqlLogIn(logInData) {  //Takes the user and stores it in local storage
    //const userlogin = localStorage.getItem("userlogin");
   /* jwt.verify(userlogin, (err, decoded) => {  //Verifies token expireation 
        if(err) {
            console.log("Something went wrong!!");
        } else if (decoded !== 'undefined'){  //Token is verified redirect to Dashboard
            window.location = "/dashboard";
        } else {
            console.log("Token is expired!");
        }
    })*/


    const con = mysql.createConnection({
        host: process.env.DATABASE_HOST || "localhost",
        user: process.env.DATABASE_USER || "root",
        password: process.env.DATABASE_PASSWORD || "msn1msn2",
        database: process.env.DATABASE || "server1",
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
                    expiresIn: process.env.JWT_EXPIRES_IN //3600
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

function createToken(payload) {
    
    const token = jwt.sign({ payload }, process.env.JWT_SECRET, {
        expiresIn: 15 //3600  
    });

    return token;
}

function sendToken(res) {

    const tt = createToken();

}

console.log(createToken(10));



module.exports = { sqlLogIn };


// 1. take username and create jwt token.
// 2. store jwt token string in localstorage 
// 3. verify token whenever user login
// 4. if token is not expired user will be redirected to the dashboard
// 5. if token is expired user need to login again.
// TODO
// 1. on logout destroy the token
// 2. on signup create token and store in local storage and redirect user to the 
//    dashboard.

// send token til klienten
