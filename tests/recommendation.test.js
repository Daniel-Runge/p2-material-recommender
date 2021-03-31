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
    const student2 = {
        Perception: -5,
        Input: -11,
        Processing: 3,
        Understanding: -5
    }

    const student3 = {
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
    }

    const material2 = {
        ac: null,
        re: null,
        se: null,
        in: -15,
        vi: 10,
        ve: 25,
        sq: 22,
        gl: -40
    }

    test("Works on correct input", () => {
        const actual = calcPersonalMaterialScore(student, material);
        expect(actual).toBe(-2.5)
    })

    test("Works on correct input", () => {
        const actual = calcPersonalMaterialScore(student2, material);
        expect(actual).toBe(9.333333333333336)
    })

    test("Expected error for any null value in student", () => {
        const actual = calcPersonalMaterialScore(student3, material);
        expect(actual).toEqual(Error("Something went wrong. A falsy value has been given."))
    })

    test("Expected error for any null value in material", () => {
        const actual = calcPersonalMaterialScore(student, material2);
        expect(actual).toEqual(Error("Something went wrong. A falsy value has been given."))
    })


    const student4 = {
        Perception: 0,
        Input: 5,
        Processing: 0,
        Understanding: 1
    }
    test("Expected error for any zero value in student", () => {
        const actual = calcPersonalMaterialScore(student4, material);
        expect(actual).toEqual(Error("Something went wrong. A falsy value has been given."))
    })

    test("Expected error for no input", () => {
        const actual = calcPersonalMaterialScore();
        expect(actual).toEqual(Error("Something went wrong. Missing either person or material value."))
    })

    test("Expected error for wrong input, no material/student", () => {
        const actual = calcPersonalMaterialScore(student);
        expect(actual).toEqual(Error("Something went wrong. Missing either person or material value."))
    })

    test("Expected error for wrong input, reverse order of input", () => {
        const actual = calcPersonalMaterialScore(material, student);
        expect(actual).toEqual(Error("Something went wrong. A falsy value has been given."))
    })
})