const mysql = require('mysql');

const sql1 = `INSERT INTO Courses (CourseName) VALUES ('')`
const sql = `SELECT CourseName FROM courses`;

function queryToSqlDb (sqlquery){
    const con = mysql.createConnection({
        host: "localhost",
        user: "g",
        password: "123456",
        database: "server1"
      });
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sqlquery, function (err, result) {
            if (err) throw err;
                console.log("1 record inserted");
                console.log(result);
          });
        });
}

queryToSqlDb(sql);

