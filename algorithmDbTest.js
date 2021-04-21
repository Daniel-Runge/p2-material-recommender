const { calcPersonalMaterialScore } = require('./recommendation');
const { queryToSqlDb } = require("./sqlDbQuery")

const user = {
    Perception: 5,
    Input: 11,
    Processing: -3,
    Understanding: 5
};

queryToSqlDb('SELECT * FROM Material',
    (result) => {
        let barray = [];
        let value
        console.log('hellosdjkfh');
        balue = result.reduce( function (previousLargestNumber, currentLargestNumber) {
            
            let value = (calcPersonalMaterialScore(user, currentLargestNumber) > previousLargestNumber) ? calcPersonalMaterialScore(user, currentLargestNumber) : previousLargestNumber;
            if (value == currentLargestNumber){
                return {Value: value, id: currentLargestNumber}
            }
            else {
                return {Value: value, id: previousLargestNumber}
            }
        }, 0);

            
        console.log(balue);
    }


)