const mysql = require("mysql");
require("dotenv").config();

/**
 *
 * @param {takes jason object from sign up page} signUpData
 * @returns a sql query,
 *  if the query is run add data(the signupdata, email and password) from signup into the mysql database
 */

 // Access values of all the dimensions from the database using email
async function sqlGetValuesForProfile(userEmail) {
    const sql = `SELECT * FROM users WHERE Email = "${userEmail}"`;
    let result = await queryToSqlDb(sql);
    let res = JSON.parse(JSON.stringify(result));
    return res;
  }

  // Update the dimensions value in Database using user email
  async function updateValuesInDatabaseQuery(perception, input, processing, understanding, email) {
    const sql = `update users set Perception=${perception}, Input=${input}, Processing=${processing}, Understanding=${understanding} WHERE Email="${email}"`;
   const result= await queryToSqlDb(sql);
   return result;
}

function sqlConstructorSignUp(email, password) {
  if (typeof email !== "string") {
    return "error";
  } else {
    console.log("sign up ", email);
    const sql = `INSERT INTO users (Email, UserPassword) VALUES ("${email}", "${password}")`;
    return sql;
  }
}

function sqlConstructorLogin(email, password) {
  const sql = `SELECT * FROM users WHERE Email = "${email}" AND UserPassword = "${password}"`;
  return sql;
}

function sqlConstructorConfirmSignup(email) {
  const sql = `SELECT Email FROM users WHERE Email = "${email}"`;
  return sql;
}

function sqlConstructorMaterial(Material) {
  console.log("material ", Material.value);
  const sql = `INSERT INTO Material (Sensing, Intuitive, Visual, Verbal, Active, Reflective, Sequential, Global) 
  VALUES ("${Material.Sensing}","${Material.Intuitive}","${Material.Visual}","${Material.Verbal}",
  "${Material.Active}","${Material.Reflective}","${Material.Sequential}","${Material.Global}")`;
  return sql;
}

/**
 *
 * @param {takes a string format sql query} sql
 * passes this query to the query to sql db func.
 * the purpose of this function is making queryToSqlDb into a async function by wrapping it
 * @returns returns what query to sql db returns
 */
async function asyncContainerDBQuery(sql) {
  let result = await queryToSqlDb(sql);
  console.log("query to sql db returns", result);
  return result;
}

/**
 *
 * @param {takes a string format sql query} sql
 * passes this query to the query to sql db func.
 * the purpose of this function is making queryToSqlDb into a async function by wrapping it
 * @returns returns what query to sql db returns
 */
async function asyncContainerDBQuery(sql) {
  let result = await queryToSqlDb(sql);
  console.log("query to sql db returns", result);
  return result;
}

/**
 *
 * @param {takes a string sql query} sqlquery
 * @returns returns a object with the result of the query, unless there is a error then it will throw a error,
 */

function queryToSqlDb(sqlquery) {
  return new Promise((resolve, reject) => {
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
      con.query(sqlquery, (error, result, fields) => {
        if (error) {
          return reject(error);
        }
        console.log(result);
        return resolve(result);
      });
    });
  });
}

module.exports = {
  sqlConstructorSignUp,
  queryToSqlDb,
  sqlConstructorLogin,
  sqlConstructorMaterial,
  asyncContainerDBQuery,
  sqlConstructorConfirmSignup,
  sqlGetValuesForProfile,
  updateValuesInDatabaseQuery
};
