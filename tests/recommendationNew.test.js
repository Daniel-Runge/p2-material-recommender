const { calculateScore, byPersonalScore, recommendationAlgo } = require('../recommendationNew')

describe("Tests if the scoreing algorithm works on correct input", () => {
    const userObject = {
        Perception: 11,
        Input: 11,
        Proccessing: -9,
        Understanding: -7
    }

    const userNull = {
        Perception: 3,
        Input: 1,
        Proccessing: null,
        Understanding: 3  
    }

    const materialObject = [
        {
            MaterialID: 1,
            Sensing: 0.3,
            Intuitive: 1,
            Visual: 0.5,
            Verbal: 0.5,
            Active: 1,
            Reflective: 0.3,
            Sequential: 0.7,
            Global: 0.2
        },
        {
            MaterialID: 1,
            Sensing: 0.3,
            Intuitive: 1,
            Visual: 0.5,
            Verbal: 0.5,
            Active: 1,
            Reflective: 0.3,
            Sequential: 0.7,
            Global: 0.2
        },
        {
            MaterialID: 2,
            Sensing: 0.3,
            Intuitive: 0.2,
            Visual: 1,
            Verbal: 0.5,
            Active: 0.2,
            Reflective: 1,
            Sequential: 0.3,
            Global: 1
        },
        {
            MaterialID: 3,
            Sensing: 1,
            Intuitive: 0.2,
            Visual: 1,
            Verbal: 0.3,
            Active: 1,
            Reflective: 0.2,
            Sequential: 0.5,
            Global: 0.5
        },
    ];

    test("Returns the best material on correct input", () => {
        const material = recommendationAlgo(userObject, materialObject)
        expect(material).toEqual([
            { "Active": 0.2, "Global": 1, "Intuitive": 0.2, "MaterialID": 2, "Reflective": 1, "Sensing": 0.3, "Sequential": 0.3, "Verbal": 0.5, "Visual": 1, "personalScore": 0.7973684210526316 },
            { "Active": 1, "Global": 0.5, "Intuitive": 0.2, "MaterialID": 3, "Reflective": 0.2, "Sensing": 1, "Sequential": 0.5, "Verbal": 0.3, "Visual": 1, "personalScore": 0.718421052631579 },
            { "Active": 1, "Global": 0.2, "Intuitive": 1, "MaterialID": 1, "Reflective": 0.3, "Sensing": 0.3, "Sequential": 0.7, "Verbal": 0.5, "Visual": 0.5, "personalScore": 0.3394736842105263 },
            { "Active": 1, "Global": 0.2, "Intuitive": 1, "MaterialID": 1, "Reflective": 0.3, "Sensing": 0.3, "Sequential": 0.7, "Verbal": 0.5, "Visual": 0.5, "personalScore": 0.3394736842105263 }
        ])
    })
    test("Returns error on incorrect input", () => {
        const material = recommendationAlgo(null, null)
        expect(material).toEqual(Error)
    })
    test("Returns error if no FSML values in user object", () => {
        const material = recommendationAlgo(userNull, materialObject)
        expect(material).toEqual(Error)
    })
})