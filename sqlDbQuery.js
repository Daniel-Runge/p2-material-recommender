const mysql = require('mysql');

const signUpObject = {
  username:"hello3",
  password:"hsdlafj3a2"
}

function sqlConstructorSignUp (signUpData){
  console.log("sign up ", signUpData.username);
  const sql = `INSERT INTO users (Email, UserPassword)
  VALUES (${signUpData.username},${signUpData.password})`
  queryToSqlDb(sql);
}


function queryToSqlDb (){
    const con = mysql.createConnection({
        host: process.env.DATABSE_HOST || "localhost",
        user: process.env.DATABSE_USER || "root",
        password: process.env.DATABASE_PASSWORD || "",
        database: process.env.DATABASE || "database"
      });
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        });
}
queryToSqlDb()

module.exports = { sqlConstructorSignUp }

