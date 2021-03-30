
let person = {
    Perception: 11,
    Input: 1,
    Processing: -1,
    Understanding: 11
};

let lars = {
    Perception: -3,
    Input: 5,
    Processing: -9,
    Understanding: 7
};

let rejemond = {
    Perception: 11,
    Input: 11,
    Processing: 11,
    Understanding: 11
};

let crazyRaymond = {
    Perception: 1,
    Input: 1,
    Processing: 1,
    Understanding: 1
};


const student = {
    Perception: 5,
    Input: 11,
    Processing: -3,
    Understanding: 5
    }

    const material = {
        ac: 32,
        re: 55,
        se: -11,
        in: -15,
        vi: 10,
        ve: 25,
        sq: 22,
        gl: -40
    };


console.log(calcPersonalMaterialScore(student, material));


/**
 * @author Mads Overgaard Nissum & Raymond Kacso & Lars Emanuel Hansen
 * @param {object} person Object from database with the results from the Felder Silverman test
 * @param {object} material Object from database with the scores from the scoringAlgorithm
 * @returns Score based on the personal fit for the person viewing the material
 */
function calcPersonalMaterialScore(person, material) {
    if(!person.Perception || !person.Processing || !person.Input || !person.Understanding){
        return new Error("Something went wrong. A falsy value has been given.");
    }
    else{
    let total = Math.abs(person.Perception) + Math.abs(person.Input) + Math.abs(person.Processing) + Math.abs(person.Understanding);
    let procent1 = (Math.abs(person.Perception) / total);
    let procent2 = (Math.abs(person.Input) / total);
    let procent3 = (Math.abs(person.Processing) / total);
    let procent4 = (Math.abs(person.Understanding) / total);

    let score1;
    let score2;
    let score3;
    let score4;

    if (person.Perception < 0)
        score1 = procent1 * material.ac;
    else
        score1 = procent1 * material.re;
    if (person.Input < 0)
        score2 = procent2 * material.se;
    else
        score2 = procent2 * material.in;
    if (person.Processing < 0)
        score3 = procent3 * material.vi;
    else
        score3 = procent3 * material.ve;
    if (person.Understanding < 0)
        score4 = procent4 * material.sq;
    else
        score4 = procent4 * material.gl;
    

    return score1 + score2 + score3 + score4;
    }
}
module.exports = { calcPersonalMaterialScore };
