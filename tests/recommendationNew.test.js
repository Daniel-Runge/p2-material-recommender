const { TestScheduler } = require('@jest/core');
const { calculateScore, byPersonalScore, recommendationAlgo } = require('../recommendation')

/**
 * @author Lars Hansen
 * tjekker ikke for om nogle af objekterne indeholder 'null'
 */

describe("Test if scoring algorithm works on correct input, and gives error with incorrect input", () => {
    const userObject = {
        Perception: 11,
        Input: 11,
        Proccessing: -9,
        Understanding: -7
    }

    const userObjectNull = {
        Perception: 3,
        Input: 1,
        Proccessing: null,
        Understanding: 3
    }

    const materialObjectNull = {
        MaterialID: null,
        name: '',
        desc: '',
        Sensing: 0,
        Intuitive: 0,
        Visual: 0,
        Verbal: 0,
        Active: 0,
        Reflective: 0,
        Sequential: 0,
        Global: 0
    }

    const materialObject = [
        {
            MaterialID: 1,
            name: '',
            desc: '',
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
            name: '',
            desc: '',
            Sensing: 0.3,
            Intuitive: 1,
            Visual: 0.5,
            Verbal: 0.2,
            Active: 1,
            Reflective: 0.3,
            Sequential: 0.7,
            Global: 0.2
        },
        {
            MaterialID: 3,
            name: '',
            desc: '',
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
            MaterialID: 4,
            name: '',
            desc: '',
            Sensing: 1,
            Intuitive: 0.2,
            Visual: 1,
            Verbal: 0.3,
            Active: 1,
            Reflective: 0.2,
            Sequential: 0.5,
            Global: 0.5
        },
        {
            MaterialID: 5,
            name: '',
            desc: '',
            Sensing: 0.5,
            Intuitive: 0.5,
            Visual: 0.5,
            Verbal: 0.5,
            Active: 0.5,
            Reflective: 0.5,
            Sequential: 0.5,
            Global: 0.5
        },
        {
            MaterialID: 6,
            name: '',
            desc: '',
            Sensing: 0.5,
            Intuitive: 0.5,
            Visual: 0.5,
            Verbal: 0.5,
            Active: 0.5,
            Reflective: 0.5,
            Sequential: 0.5,
            Global: 0.5
        }
    ];

    test("Returns the best material on correct input", () => {
        const bestMaterial = recommendationAlgo(userObject, materialObject)
        expect(bestMaterial).toEqual([{
            "Active": 1,
            "Global": 0.2,
            "Intuitive": 1,
            "MaterialID": 1,
            "Reflective": 0.3,
            "Sensing": 0.3,
            "Sequential": 0.7,
            "Verbal": 0.5,
            "Visual": 0.5,
            "desc": "",
            "name": "",
            "personalScore": 0.7999999999999999,
        },
        {
            "Active": 1,
            "Global": 0.2,
            "Intuitive": 1,
            "MaterialID": 2,
            "Reflective": 0.3,
            "Sensing": 0.3,
            "Sequential": 0.7,
            "Verbal": 0.2,
            "Visual": 0.5,
            "desc": "",
            "name": "",
            "personalScore": 0.7131578947368421,
        },
        {
            "Active": 0.5,
            "Global": 0.5,
            "Intuitive": 0.5,
            "MaterialID": 5,
            "Reflective": 0.5,
            "Sensing": 0.5,
            "Sequential": 0.5,
            "Verbal": 0.5,
            "Visual": 0.5,
            "desc": "",
            "name": "",
            "personalScore": 0.5,
        },
        {
            "Active": 0.5,
            "Global": 0.5,
            "Intuitive": 0.5,
            "MaterialID": 6,
            "Reflective": 0.5,
            "Sensing": 0.5,
            "Sequential": 0.5,
            "Verbal": 0.5,
            "Visual": 0.5,
            "desc": "",
            "name": "",
            "personalScore": 0.5,
        },
        {
            Active: 1,
            Global: 0.5,
            Intuitive: 0.2,
            MaterialID: 4,
            Reflective: 0.2,
            Sensing: 1,
            Sequential: 0.5,
            Verbal: 0.3,
            Visual: 1,
            desc: "",
            name: "",
            personalScore: 0.47368421052631576,
        },
        {
            Active: 0.2,
            Global: 1,
            Intuitive: 0.2,
            MaterialID: 3,
            Reflective: 1,
            Sensing: 0.3,
            Sequential: 0.3,
            Verbal: 0.5,
            Visual: 1,
            desc: "",
            name: "",
            personalScore: 0.30526315789473685,
        }])
    })

    test("Returns error on incorrect user input", () => {
        const bestMaterial = recommendationAlgo(userObjectNull, materialObject)
        expect(bestMaterial).toEqual(Error)
    }) 
    test("Returns error on incorrect material input", () => {
        const bestMaterial = recommendationAlgo(userObject)
        expect(bestMaterial).toEqual(Error)
    })

})




