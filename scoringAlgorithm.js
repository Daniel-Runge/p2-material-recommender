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

    let materiale = 0;
    if (person.dimension1 > 0) {
        materiale += person.dimension1;

        materiale -= person.dimension1;
    } else {
        materiale.reflexive -= person.dimension1;

        materiale.active += person.dimension1;
    }

}

function ratingForDimension(value) {
    return Math.pow(1000, (Math.abs(value) / 100));
}

function ratingForOpisiteDimension(value) {
    return 1 / Math.sqrt(Math.abs(value));
}
if (ratingForDimension(11) === 2.137962089502232)
    console.log("yey");
else
    console.log("no");
//results from the last two functions
console.log("reflexive  " + "+ " +
    ratingForDimension(11));
console.log("active     " + "- " +
    ratingForOpisiteDimension(11));