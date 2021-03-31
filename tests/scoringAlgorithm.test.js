const { ratingForDimension, ratingForOppositeDimension, CalcDim } = require('../scoringAlgorithm.js');

describe("The function calculates a score for any dimension ", () => {
    test('Should return a number on correct input', () => {
        const number = ratingForDimension(11);
        expect(number).toEqual(2.137962089502232);
    })

    test('Should return an error on null input', () => {
        const number = ratingForDimension(null);
        expect(number).toEqual(Error("Something went wrong. A falsy value for person has been given"));


    })

    test('Should return an error on null input', () => {
        const number = ratingForOppositeDimension(null);
        expect(number).toEqual(Error);

    })

    test('Should give a number on correct input', () => {


        const number = ratingForOppositeDimension(11);
        expect(number).toEqual(0.30151134457776363);
    })
});