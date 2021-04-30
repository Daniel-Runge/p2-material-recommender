/**
 * @author Mads Overgaard Nissum & Raymond Kacso & Lars Emanuel Hansen
 * @param {object} person Object from database with the results from the Felder Silverman test
 * @param {object} material Object from database with the scores from the scoringAlgorithm
 * @returns Score based on the personal fit for the person viewing the material
 */
 function calcPersonalMaterialScore(person, material) {
    if (!person || !material)
        return new Error("Something went wrong. Missing either person or material value.");

    if (!person.Perception || !person.Processing || !person.Input || !person.Understanding) {
        return new Error("Something went wrong. A falsy value has been given.");
    }
    if (!material.Active || !material.Reflective || !material.Sensing || !material.Intuitive || !material.Visual || !material.Verbal || !material.Sequential || !material.Global) {
        return new Error("Something went wrong. A falsy value has been given.");
    } else {
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
            score1 = procent1 * material.Active;
        else
            score1 = procent1 * material.Reflective;
        if (person.Input < 0)
            score2 = procent2 * material.Sensing;
        else
            score2 = procent2 * material.Intuitive;
        if (person.Processing < 0)
            score3 = procent3 * material.Visual;
        else
            score3 = procent3 * material.Verbal;
        if (person.Understanding < 0)
            score4 = procent4 * material.Sequential;
        else
            score4 = procent4 * material.Global;

        console.log('Ac & Re ' + score1, 'Se & In ' + score2, 'Vi & Ve ' + score3, 'Sq & Gl ' + score4);


        return score1 + score2 + score3 + score4;
    }
}
module.exports = { calcPersonalMaterialScore };