const { ratingForDimension, ratingForOppositeDimension, calcDimLeft, calcDimRight } = require('../scoringAlgorithm.js');

describe("The function calculates a score for any dimension ", () => {
    test('Should return a number on correct input', () => {
        const number = ratingForDimension(11);
        expect(number).toEqual(2.137962089502232);
    })

    test('Should return an error on null input', () => {
        const number = ratingForDimension(null);
        expect(number).toEqual(Error);
    })

    test('Should return an error on null input', () => {
        const number = ratingForOppositeDimension(null);
        expect(number).toEqual(Error);
    })

    test('Should give a number on correct input', () => {
        const number = ratingForOppositeDimension(11);
        expect(number).toEqual(0.30151134457776363);
    })

    test('Should give a number on correct input', () => {
        const number = calcDimRight(1, 11, 10);
        expect(number).toEqual(12.137962089502231)
    })

    test('Should give a number on correct input', () => {
        const number = calcDimRight(1, -11, 10);
        expect(number).toEqual(10.301511344577763)
    })

    test('Should give a error on null input', () => {
        const number = calcDimRight(null, null, null);
        expect(number).toEqual(Error)
    })

    test('Should give a error on zero input', () => {
        const number = calcDimRight(0, 0, 0);
        expect(number).toEqual(Error)
    })

    test('Should give a number on correct input', () => {
        const number = calcDimLeft(1, 11, 10);
        expect(number).toEqual(10.301511344577763)
    })

    test('Should give a number on correct input', () => {
        const number = calcDimLeft(1, -11, 10);
        expect(number).toEqual(12.137962089502231)
    })

    test('Should give a error on null input', () => {
        const number = calcDimLeft(null, null, null);
        expect(number).toEqual(Error)
    })

    test('Should give a error on zero input', () => {
        const number = calcDimLeft(0, 0, 0);
        expect(number).toEqual(Error)
    })
});