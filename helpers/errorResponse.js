/**
 * @Author Daniel Runge Petersen
 * @param {object} res The response the function edits
 * @param {number} code the error code to include in the response
 * @param {string} reason the reason for the error associated with the error code
 */
function errorResponse(res, code, reason) {
  res.statusCode = code;
  res.setHeader("Content-Type", "text/txt");
  res.write(reason);
  res.end("\n");
}

module.exports = { errorResponse };
