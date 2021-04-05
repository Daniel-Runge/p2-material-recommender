const mysql = require('mysql');


function sqlConstructorSignUp (signUpData){
  console.log("sidgn up ", signUpData.value.username);
  const sql = `INSERT INTO users (Email, UserPassword)
  VALUES ("${signUpData.value.username}", "${signUpData.value.password}")`
  queryToSqlDb(sql);
}

function queryToSqlDb (sqlquery){
    const con = mysql.createConnection({
        host: "localhost",
        user: "g",
        password: "123456",
        database: "db19"
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

