/**
 * @author C2-20
 * @param {Object} user an object with all the users FSLM values, ranging from -11 to 11
 * @param {Array} material an array of objects that contain all information about all the materials. Id, pole values etc.
 * @returns The sorted array of all given material, based on the users FSLM scores
 */
function recommendationAlgo(user, materials) {
    //Checks if there is user or material object
    if (!user || !materials) {
        return Error
    }

    //Checks for null in user object
    const dimensions = Object.values(user) 
    for (const value of dimensions)
        if (!value)
            return Error

    let scoresArray = []
    materials.forEach(material => {
        scoresArray.push(calculateScore(user, material))
    });
    console.log(scoresArray.sort(byPersonalScore)[0]);
    return scoresArray.sort(byPersonalScore)[0]
}

/**
 * @author C2-20
 * Helper function to sort an array, based on .personalScore and sets the highest scoring material first.
 */
function byPersonalScore(a, b) {
    if (a.personalScore < b.personalScore) return 1;
    if (b.personalScore < a.personalScore) return -1;
    return 0;
}

/**
 * @author C2-20
 * @param {object} user an object with a single users information
 * @param {object} material an object with a single material and its values
 * @returns the material with a new value called .personalScore which contains a percentage of how will the fit is between the user and the material
 */
function calculateScore(user, material) {
    let totalScore = 0, score = 0, i = 3
    let materialArray = Object.values(material)
    //materialArray.shift() //Removes ID from array

    for (const key in user) {
        console.log("HERE", materialArray[i], user[key]);
        if (user[key] < 0) { //if the user is on the left side of a dimmension
            totalScore += user[key]
            score += user[key] * materialArray[i]
            i++
        }
        else { //If the user is on the right side of a dimmension
            i++
            totalScore += Math.abs(user[key])
            score += Math.abs(user[key]) * materialArray[i]
        }
        i++
    }

    material.personalScore = score / totalScore
    return material
}

module.exports =
{
    calculateScore,
    byPersonalScore,
    recommendationAlgo
}