const jwt = require("jsonwebtoken");

/**
 * @author Daniel Runge and Raymond Kacso
 * @param {number} id user id to generate tokens
 * @returns a long string with  the token headers, payload and signature separated by dots
 */
function createToken(userObject) {
  let user = {
    email: userObject.Email,
    perception: userObject.Perception,
    input: userObject.Input,
    processing: userObject.Processing,
    understanding: userObject.Understanding
  };
  const token = jwt.sign({ user },  `${process.env.JWT_SECRET}`);
  console.log(user);
  return token;
}

/**
 * @author Daniel Runge and Raymond Kacso
 * @param {String} token that is created by the function createToken
 * @return false if the token is not present. Else it returns an object
 */
function verifyToken(token) {
  if (!token) return false;

  const jwtDecoder = jwt.verify(
    token,
    `${process.env.JWT_SECRET}`,
    (err, decoded) => {
      if (err) return false;

      return decoded;
    }
  );
  return jwtDecoder;
}

module.exports = { createToken, verifyToken };
