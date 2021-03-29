/**
 * this file should have an *import* from another JS file which contains the database
 * the database should look like the following:
 */
/*
{

"title": "a title"
{
    "id": 1
    {
    "reflexive": "int number",
    "active": "int number",
    "intuitive": "int number",
    "sensing": "int number",
    "global": "int number",
    "sequential": "int number",
    "visual": "int number",
    "verbal": "int number"
    }

    "id": 2
    {
    "reflexive": "int number",
    "active": "int number",
    "intuitive": "int number",
    "sensing": "int number",
    "global": "int number",
    "sequential": "int number",
    "visual": "int number",
    "verbal": "int number"    
    }
}

"title": "another title"
{
    "id": 3
    {
    "reflexive": "int number",
    "active": "int number",
    "intuitive": "int number",
    "sensing": "int number",
    "global": "int number",
    "sequential": "int number",
    "visual": "int number",
    "verbal": "int number"
    }
}
}

*/

//import '/score/database.js'
//import '/person/database.js'


/**
 * @author Mads Overgaard Nissum & Raymond Kacso
 * @param {value} vote either -1 or 1 for like or dislike
 * @param {object} person Object with the 4 dimensions from the felder silver test
 * @param {object} material Object with 8 values, 2 values for each of the 4 dimension
 */
function scoringAlgorithm(vote, person, material) {
    CalcDim(vote, person, material, material2);
    CalcDim(vote, person, material, material2);
    CalcDim(vote, person, material, material2);
    CalcDim(vote, person, material, material2);
    
    //Person og material skal laves forskelligt i endelig løsning
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
        leftDimension += vote * ratingForOpisiteDimension(person);
    }
    else {
        leftDimension += vote * ratingForDimension(person);
        rightDimension += vote * ratingForOpisiteDimension(person);
    }
}

/**
 * @author Mads Overgaard Nissum & Raymond Kacso
 * @param {value} value value from test in person object
 * @returns {value} returns a score to be added to the material on the side of the dimension where the user has his rating
 */
function ratingForDimension(value) {
    return Math.pow(1000, (Math.abs(value) / 100));
}

/**
 * @author Mads Overgaard Nissum & Raymond Kacso
 * @param {value} value value from test in person object
 * @returns {value} returns a score to be added to the material on the opposite side of the dimension where the user has his rating
 */
function ratingForOpisiteDimension(value) {
    return 1 / Math.sqrt(Math.abs(value));
}

