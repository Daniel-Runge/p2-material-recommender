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
function scoringAlgorithm(person) {
    'person.dimension1 = 1 >> tæller ikke så meget i materiale.reflexive'
    'person.dimension1 =  1 >> tæller mere i materiale.active'

    if (person.dimension1 > 0) {
        materiale.reflexive += person.dimension1;

        materiale.active -= person.dimension1;
    } else {
        materiale.reflexive -= person.dimension1;

        materiale.active += person.dimension1;
    }

}