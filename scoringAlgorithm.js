//import '/score/database.js'
//import '/person/database.js'

/**
 * @author Mads Overgaard Nissum & Raymond Kacso
 * @param {value} vote either -1 or 1 for like or dislike
 * @param {object} person Object with the 4 dimensions from the felder silver test
 * @param {object} material Object with 8 values, 2 values for each of the 4 dimension
 */
 function scoringAlgorithm(vote, person, material) {
    CalcDim(vote, person.processing, material.reflexive, material.active);
    CalcDim(vote, person.perception, material.intuitive, material.sensing);
    CalcDim(vote, person.input, material.verbal, material.visual);
    CalcDim(vote, person.understanding, material.global, material.sequantial);

    /* Important! Person and material is subject to change depending on the database*/
}

/**
 * @author Mads Overgaard Nissum & Raymond Kacso
 * @param {value} vote either -1 or 1 for like or dislike
 * @param {object} person Object with the 4 dimensions from the felder silver test
 * @param {object} rightDimension From material object right side dimension
 * @param {object} leftDimension From material object left side dimension
 */
function CalcDim(vote, person, rightDimension, leftDimension) {
    if (person > 0) {
        rightDimension += vote * ratingForDimension(person);
        leftDimension += vote * ratingForOppositeDimension(person);
    } else {
        leftDimension += vote * ratingForDimension(person);
        rightDimension += vote * ratingForOppositeDimension(person);
    }
}

/**
 * @author Mads Overgaard Nissum & Raymond Kacso
 * @param {value} value value from test in person object
 * @returns {value} returns a score to be added to the material on the side of the dimension where the user has his rating
 */
function ratingForDimension(value) {
    const result = !value ? Error : (Math.pow(1000, (Math.abs(value) / 100)));

    return result;
}

/**
 * @author Mads Overgaard Nissum & Raymond Kacso
 * @param {value} value value from test in person object
 * @returns {value} returns a score to be added to the material on the opposite side of the dimension where the user has his rating
 */
function ratingForOppositeDimension(value) {
    
    const result = !value ? Error : (1 / Math.sqrt(Math.abs(value)));

    return result;
}

/* 
If algorithme dosent work well we can use these two function
f(x) = 1/10x + 1,4 & f(x) = -1/10x + 1,1 this will make it
so that if you have 1 in felder silvermantest it will make
it so that the points added will be 1,5 and 1. If you have 
11 in the test it will count 2,5.
*/

module.exports = {
    ratingForDimension,
    ratingForOppositeDimension,
    CalcDim,
    scoringAlgorithm
};