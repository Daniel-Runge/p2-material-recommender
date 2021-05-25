const { determineDimensions } = require("./determineDimensions");

function generateUpdateMaterialQuery(data, user) {
  const like = data.submit;
  const poles = determineDimensions(user);
  let targets = ``;
  let i = 0;

  for (pole in poles) {
    targets += `${pole}${like} = ${pole}${like} + ${poles[pole]}`;
    targets += i < 3 ? `, ` : "";
    i++;
  }
  return `UPDATE Material SET ${targets} WHERE MaterialID = ${data.materialID};`;
}

module.exports = { generateUpdateMaterialQuery };
