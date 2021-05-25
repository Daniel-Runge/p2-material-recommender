const { TestScheduler } = require('@jest/core');
const { calculateScore, byPersonalScore, recommendationAlgo } = require('../recommendation')

describe("Test if scoring algorithm works on correct input", () => {
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
            MaterialID: 2,
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
            MaterialID: 3,
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
    ];

    test("Returns the best material on correct input", () => {
        const bestMaterial = recommendationAlgo(userObject, materialObject)
        expect(bestMaterial).toEqual([])
    })
})




