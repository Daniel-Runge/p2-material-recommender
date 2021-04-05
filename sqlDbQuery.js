const mysql = require('mysql');


function sqlConstructorSignUp (signUpData){
  console.log("sidgn up ", signUpData.value.username);
  const sql = `INSERT INTO users (Email, UserPassword)
  VALUES ("${signUpData.value.username}","${signUpData.value.password}")`
  queryToSqlDb(sql);
}

function queryToSqlDb (sqlquery){
    const con = mysql.createConnection({
<<<<<<< HEAD
        host: "localhost",
        user: "g",
        password: "123456",
        database: "db19"
=======
        host: process.env.DATABASE_HOST || "localhost",
        user: process.env.DATABASE_USER || "root",
        password: process.env.DATABASE_PASSWORD || "",
        database: process.env.DATABASE || "database"
>>>>>>> fc9108a53493d878be3ea83592f39d16d02d3205
      });
      
    con.connect(function(err) {
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

module.exports = { sqlConstructorSignUp }

