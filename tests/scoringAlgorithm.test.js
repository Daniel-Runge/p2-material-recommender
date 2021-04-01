const { rateDimension, rateDimensionOpposite, calculateDimensionLeft, calculateDimensionRight, scoringAlgorithm } = require('../scoringAlgorithm.js');

describe("The function calculates a score for any dimension ", () => {
    test('Returns a number on correct input', () => {
        const number = rateDimension(11);
        expect(number).toEqual(2.137962089502232);
    })

    test('Returns an error on null input', () => {
        const number = rateDimension(null);
        expect(number).toEqual(Error);
    })

    test('Returns an error on null input', () => {
        const number = rateDimensionOpposite(null);
        expect(number).toEqual(Error);
    })

    test('Gives a number on correct input', () => {
        const number = rateDimensionOpposite(11);
        expect(number).toEqual(0.30151134457776363);
    })

    test('Gives a number on correct input', () => {
        const number = calculateDimensionRight(1, 11, 10);
        expect(number).toEqual(12.137962089502231)
    })

    test('Gives a number on correct input', () => {
        const number = calculateDimensionRight(1, -11, 10);
        expect(number).toEqual(10.301511344577763)
    })

    test('Gives a error on null input', () => {
        const number = calculateDimensionRight(null, null, null);
        expect(number).toEqual(Error)
    })

    test('Gives a error on zero input', () => {
        const number = calculateDimensionRight(0, 0, 0);
        expect(number).toEqual(Error)
    })

    test('Gives a number on correct input', () => {
        const number = calculateDimensionLeft(1, 11, 10);
        expect(number).toEqual(10.301511344577763)
    })

    test('Gives a number on correct input', () => {
        const number = calculateDimensionLeft(1, -11, 10);
        expect(number).toEqual(12.137962089502231)
    })

    test('Gives a error on null input', () => {
        const number = calculateDimensionLeft(null, null, null);
        expect(number).toEqual(Error)
    })

    test('Gives a error on zero input', () => {
        const number = calculateDimensionLeft(0, 0, 0);
        expect(number).toEqual(Error)
    })
});

describe("The function calculates the final score of material after rating ", () => {

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

    test('Returns an object with the material scores, on correct input with positive vote', () => {
        const objScore = scoringAlgorithm(1, student, material);
        expect(objScore).toEqual({
            active: 33.23026877081238,
            reflexive: 55.57735026918962,
            sensing: -10.552786404500042,
            intuitive: -13.587462455377246,
            visual: 10.301511344577763,
            verbal: 27.13796208950223,
            sequantial: 22.447213595499957,
            global: -38.58746245537725
        });
    })

    const material2 = {
        active: 32,
        reflexive: 55,
        sensing: -11,
        intuitive: -15,
        visual: 10,
        verbal: 25,
        sequantial: 22,
        global: -40
    }

    test('Returns an object with the material scores, on correct input with negative vote', () => {
        const objScore = scoringAlgorithm(-1, student, material2);
        expect(objScore).toEqual({
            active: 30.76973122918762,
            reflexive: 54.42264973081038,
            sensing: -11.447213595499958,
            intuitive: -16.412537544622754,
            visual: 9.698488655422237,
            verbal: 22.86203791049777,
            sequantial: 21.552786404500043,
            global: -41.41253754462275
        });
    })

    test('Return an error on no input', () => {
        const objScore = scoringAlgorithm();
        expect(objScore).toEqual(Error('Missing value.'));
    })

    test('Return an error on incorrect input', () => {
        const objScore = scoringAlgorithm(2, student, material);
        expect(objScore).toEqual(Error('Invalid vote.'))
    })

    test('Return an error on invalid input', () => {
        const objScore = scoringAlgorithm(1, 5, 4);
        expect(objScore).toEqual(Error('Invalid input type.'))
    })
})
