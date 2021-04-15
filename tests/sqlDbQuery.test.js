const { sqlConstructorSignUp, queryToSqlDb } = require("../SqlDbQuery.js");



describe("The function creates a query based on json object ", () => {
    const jsonObject = {
        "value": {
          "username":"Ford",
          "password":"BMW",
        }
       } 
    
    test('Returns a correct string', () => {
        const number = sqlConstructorSignUp(jsonObject);
        expect(number).toEqual(`INSERT INTO users (Email, UserPassword) VALUES ("Ford","BMW")`)
    })

    // test('Returns a correct error', () => {
    //     const number = sqlConstructorSignUp(1);
    //     expect(number).toEqual('error')
    // })
});
