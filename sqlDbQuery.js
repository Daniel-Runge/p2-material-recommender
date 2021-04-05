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
        host: "localhost",
        user: "g",
        password: "123456",
        database: "server1"
      });
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        });
}
queryToSqlDb()

module.exports = { sqlConstructorSignUp }

