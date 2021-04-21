const { sqlConstructorMaterial, queryToSqlDb } = require("./sqlDbQuery")

function generateMaterial() {
    const material = {
        Active: Math.random().toFixed(2),
        Reflective: Math.random().toFixed(2),
        Sensing: Math.random().toFixed(2),
        Intuitive: Math.random().toFixed(2),
        Visual: Math.random().toFixed(2),
        Verbal: Math.random().toFixed(2),
        Sequential: Math.random().toFixed(2),
        Global: Math.random().toFixed(2)
    };
    return material;
}



for (let i = 0; i < 50; i++) {
    let sql = sqlConstructorMaterial(generateMaterial());
    queryToSqlDb(sql, (result) => console.log('succes', result));
}