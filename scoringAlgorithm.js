//import '/score/database.js'
//import '/person/database.js'

/**
	* @author Mads Overgaard Nissum & Raymond Kacso
	* @param {value} vote either -1 or 1 for like or dislike
	* @param {object} person Object with the 4 dimensions from the felder silver test
	* @param {object} material Object with 8 values, 2 values for each of the 4 dimension
	*/
function scoringAlgorithm(vote, person, material) {
	if (!vote || !person || !material)
		return new Error('Missing value.');
	if (vote != -1 && vote != 1)
		return new Error('Invalid vote.');
	if (typeof person !== 'object' || typeof material !== 'object')
		return new Error('Invalid input type.');
	material.active = calculateDimensionLeft(vote, person.processing, material.active);
	material.reflexive = calculateDimensionRight(vote, person.processing, material.reflexive);
	material.sensing = calculateDimensionLeft(vote, person.perception, material.sensing);
	material.intuitive = calculateDimensionRight(vote, person.perception, material.intuitive);
	material.visual = calculateDimensionLeft(vote, person.input, material.visual);
	material.verbal = calculateDimensionRight(vote, person.input, material.verbal);
	material.sequantial = calculateDimensionLeft(vote, person.understanding, material.sequantial);
	material.global = calculateDimensionRight(vote, person.understanding, material.global);

	return material;
	/* Important! Person and material is subject to change depending on the database*/
}

/**
	* @author Mads Overgaard Nissum & Raymond Kacso
	* @param {value} vote either -1 or 1 for like or dislike
	* @param {object} person Object with the 4 dimensions from the felder silver test
	* @param {object} rightDimension From material object right side dimension
	* @returns {value} returns the score for the material
	*/
function calculateDimensionRight(vote, person, rightDimension) {
	if (!vote || !person || !rightDimension)
		return Error;
	if (person > 0)
		rightDimension += vote * rateDimension(person);
	else
		rightDimension += vote * rateDimensionOpposite(person);
	return rightDimension;
}

	* @author Mads Overgaard Nissum & Raymond Kacso
	* @param {value} vote either -1 or 1 for like or dislike
	* @param {object} person Object with the 4 dimensions from the felder silver test
	* @param {object} leftDimension From material object left side dimension
	* @returns {value} returns the score for the material
	*/
function calculateDimensionLeft(vote, person, leftDimension) {
	if (!vote || !person || !leftDimension)
		return Error;
	if (person > 0)
		leftDimension += vote * rateDimensionOpposite(person);
	else
		leftDimension += vote * rateDimension(person);
	return leftDimension;
}

/**
	* @author Mads Overgaard Nissum & Raymond Kacso
	* @param {value} value value from test in person object
	* @returns {value} returns a score to be added to the material on the side of the dimension where the user has his rating
	*/
function rateDimension(value) {
	const result = !value ? Error : (Math.pow(1000, (Math.abs(value) / 100)));

	return result;
}

/**
	* @author Mads Overgaard Nissum & Raymond Kacso
	* @param {value} value value from test in person object
	* @returns {value} returns a score to be added to the material on the opposite side of the dimension where the user has his rating
	*/
function rateDimensionOpposite(value) {
	const result = !value ? Error : (1 / Math.sqrt(Math.abs(value)));

	return result;
}

/*  ---- JUST AN IDEA ----
If algorithme dosent work well we can use these two function
f(x) = 1/10x + 1,4 & f(x) = -1/10x + 1,1 this will make it
so that if you have 1 in felder silvermantest it will make
it so that the points added will be 1,5 and 1. If you have 
11 in the test it will count 2,5.
*/





const student = {
	perception: 5,
	input: 11,
	processing: -3,
	understanding: 5
}

const material = {
	active: 32,
	reflexive: 55,
	sensing: -11,
	intuitive: -15,
	visual: 10,
	verbal: 25,
	sequantial: 22,
	global: -40
}
console.log(scoringAlgorithm(-1, student, material));
//console.log(calculateDimensionLeft(1, student.processing, material.active))
module.exports = {
	rateDimension,
	rateDimensionOpposite,
	calculateDimensionRight,
	calculateDimensionLeft,
	scoringAlgorithm
};