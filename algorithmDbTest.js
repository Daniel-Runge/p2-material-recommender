const { calcPersonalMaterialScore } = require('./recommendation');
const { queryToSqlDb } = require("./sqlDbQuery")
const dotenv = require("dotenv")
dotenv.config()

const user = {
    Perception: 9,
    Input: 11,
    Processing: 5,
    Understanding: -11
};

queryToSqlDb('SELECT * FROM Material',
    (result) => {
        let array = [];

        result.forEach(element => {
            let value = calcPersonalMaterialScore(user, element);
            value = Math.round( value * 1e2 ) / 1e2;
            let id = element.MaterialID;

            let object = {
                Score: value,
                ID: id
            }

            array.push(object);

            array.sort((a, b) => b.Score - a.Score);
        });
        console.log(array);
    });