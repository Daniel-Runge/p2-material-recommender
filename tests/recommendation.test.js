/**
 * 
 */

const { recommendation, calcPersonalMaterialScore } = require("../recommendation");

describe("The function that calculates how well material fits a user", () => {
    const student = {
        Perception: 5,
        Input: 11,
        Processing: -3,
        Understanding: 5
    }
    const student2 ={
        Perception: -5,
        Input: -11,
        Processing: 3,
        Understanding: -5
    }

    const student3 ={
        Perception: null,
        Input: null,
        Processing: null,
        Understanding: null
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

    test("Works on correct input", () => {
        const actual = calcPersonalMaterialScore(student, material);
        expect(actual).toBe(-2.5)
    })

    test("Works on correct input", () => {
        const actual = calcPersonalMaterialScore(student2, material);
        expect(actual).toBe(9.333333333333336)
    })

    test("Expected error", () => {
        const actual = calcPersonalMaterialScore(student3, material);
        expect(actual).toEqual(Error("Something went wrong. A falsy value has been given."))
    })
})
