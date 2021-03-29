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
function scoringAlgorithm(person) {
    /*  'person.dimension1 = 1 >> tæller ikke så meget i materiale.reflexive'
      'person.dimension1 =  1 >> tæller mere i materiale.active'*/

    function ratingForDimension(value) {
        return Math.pow(1000, (Math.abs(value) / 100));
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

    //reflexive = dim1
    calculationDimension1(thumbs, person, material) {
        if (thumbs == false) {
            person.reflexive += 2 * person.reflexive;
            person.material += person.reflexive;
        } else {
            person.reflexive += person.reflexive;
            person.reflexive += 2 * person.reflexive;
        }
        material.reflexive += person.reflexive;
        material.active += person.reflexive;
    }