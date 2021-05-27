const { queryToSqlDb } = require("../sqlDbQuery");
const { generateUpdateMaterialQuery } = require("./generateUpdateMaterialQuery");

function updateMaterialInDatabase(data, user) {
  query = generateUpdateMaterialQuery(data, user);
  queryToSqlDb(query);
}

module.exports = {
  updateMaterialInDatabase,
};
