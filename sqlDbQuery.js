const mysql = require("mysql");

function sqlConstructorSignUp(signUpData) {
  console.log("sidgn up ", signUpData.value.username);
  const sql = `INSERT INTO users (Email, UserPassword)
  VALUES ("${signUpData.value.username}","${signUpData.value.password}")`;
  queryToSqlDb(sql);
}

function queryToSqlDb(sqlquery) {
  const con = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE || "database",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(sqlquery);
    con.query(sqlquery, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      console.log(result);
    });
  });
}

module.exports = { sqlConstructorSignUp };
