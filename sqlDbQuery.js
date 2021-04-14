const mysql = require("mysql");

/**
 * 
 * @param {takes jason object from sign up page} signUpData 
 * @returns a sql query, 
 *  if the query is run add data(the signupdata, email and password) from signup into the mysql database
 */
function sqlConstructorSignUp(signUpData) {
  if(typeof signUpData.value.username !== 'string'){
    return ('error')
  }
  else{
    console.log("sign up ", signUpData.value.username);
    const sql = `INSERT INTO users (Email, UserPassword) VALUES ("${signUpData.value.username}","${signUpData.value.password}")`;
    return sql;
  }



}
function sqlConstructorMaterial(Material){
  console.log("material ", Material.value);
  const sql = `INSERT INTO Material (Sensing, Intuitive, Visual, Verbal, Active, Reflective, Sequential, Global) 
  VALUES ("${Material.Sensing}","${Material.Intuitive}","${Material.Visual}","${Material.Verbal}",
  "${Material.Active}","${Material.Reflective}","${Material.Sequential}","${Material.Global}")`;
  return sql;
}


/**
 * 
 * @param {takes a string sql query} sqlquery 
 * @returns returns a object with the result of the query, unless there is a error then it will throw a error,
 */

function queryToSqlDb(sqlquery, resultHandling) {
  const con = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "g",
    password: process.env.DATABASE_PASSWORD || "123456",
    database: process.env.DATABASE || "db",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(sqlquery);
    con.query(sqlquery, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      resultHandling(result);
    });
  });
}









module.exports = { sqlConstructorSignUp, queryToSqlDb, sqlConstructorMaterial };
