const jwt = require('jsonwebtoken');

//dummy data
const user = {
    id: 1,
    code: 'secret',
    name: 'dummy'
};

const user2 = {
    id: 2,
    code: 'wow',
    name: 'dummy-Jr'
};

/**
 * 
 * @param {user id} the request from the user 
 * @returns a long string with  the token headers, payload and signature separated by dots
 */
function tokenCreater(id) {
    const token = jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
        expiresIn: 24
    }, {
        httpOnly: true
    });
    return token;
}

//an example of the function
console.log("The first user is:    " + tokenCreater(user));
console.log();
console.log("The second user is:   " + tokenCreater(user2));



/**
 * 
 * @param {token} the token that is created by the function createToken
 * @return undefined??? 
 */
function tokenVerifier(token) {
    const jwtDecoder = jwt.verify(tokenCreater(token), `${process.env.JWT_SECRET}`, (err, decoded) => {
        if (err) {
            console.log(err);
            // should redirect to the loginPage
        }


        //else is optional - it shows the decoded form of the token
        else {
            console.log(decoded);

        }
    });

}

//this function should send the token to the client side
function tokenToCookie(token) {
    console.log("");
}

//this function should read the cookie from the client side
function cookieReader(token) {
    console.log("");
}


/**
 * @ThisNotSoImportantFunctionIsAPrototype
 * @param {user id} the request from the user.
 *          Not done
 */
function tokenRefresher(id) {
    const refresh = jwt.sign({ id }, tokenVersion, `${process.env.JWT_TOKEN_REFRESH}`, {
        expiresIn: 24 * 60 * 60 * 3
    });
    return refresh;
}
console.log(tokenVerifier(user));