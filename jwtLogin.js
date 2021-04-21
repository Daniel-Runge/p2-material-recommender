const jwt = require('jsonwebtoken');

/**
 * @author Daniel Runge and Raymond Kacso
 * @param {Int} id user id to generate tokens 
 * @returns a long string with  the token headers, payload and signature separated by dots
 */
function createToken(id) {
    const token = jwt.sign({ id }, `${process.env.JWT_SECRET}`);
    return token;
}


/**
 * @author Daniel Runge and Raymond Kacso
 * @param {String} token that is created by the function createToken
 * @return false if the token is not present. Else it returns an object
 */
function verifyToken(token) {
    if (!token) return false;

    const jwtDecoder = jwt.verify(token, `${process.env.JWT_SECRET}`, (err, decoded) => {
        if (err) return false;
        
        return decoded;
    });
    return jwtDecoder;
}

module.exports = { createToken, verifyToken };