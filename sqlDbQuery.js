const mysql = require("mysql");

function sqlConstructorSignUp(signUpData) {
    console.log("sidgn up ", signUpData.value.username);
    const sql = `INSERT INTO users (Email, UserPassword)
  VALUES ("${signUpData.value.username}","${signUpData.value.password}")`;
    queryToSqlDb(sql);
}

function sqlConstructorRetrieveByID(signUpData) {
  console.log("sidgn up ");
  const sql = `select UserID from Users where Email="${signUpData.value.username}"`;
  queryToSqlDb(sql);
}

//Selects all of the 4 values of a particular user
function sqlGetValuesForProfile(userEmail) { 
    const sql = `select * from Users where Email=${userEmail}`;
    return queryToSqlDb(sql);
}

//Updates new values given to the users to the database (Mangler de andre 3)
function updateValuesInDatabase(updateObj) {
    const sql = `update Users set Perception=${updateObj.perception}, Input=${updateObj.input}, Processing=${updateObj.processing}, Understanding=${updateObj.understanding}`;
    queryToSqlDb(sql);
}

function queryToSqlDb(sqlquery) {
    console.log("pasword", process.env.DATABASE_PASSWORD);
    const con = mysql.createConnection({
        host: process.env.DATABASE_HOST || "localhost",
        user: process.env.DATABASE_USER || "root",
        password: process.env.DATABASE_PASSWORD || "msn1msn2",
        database: process.env.DATABASE || "server1",
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        console.log(sqlquery);
        con.query(sqlquery, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            console.log(result);
            return result;
        });
    });
}

module.exports = { sqlConstructorSignUp, sqlConstructorRetrieveByID, sqlGetValuesForProfile };