import getWalkSequence from "../hexapod/solvers/walkSequenceSolver.js"

const DEFAULT_DIMENSIONS = {
    front: 100,
    side: 100,
    middle: 100,
    coxia: 100,
    femur: 100,
    tibia: 100,
}

const POSITION_NAMES_LIST = [
    "rightMiddle",
    "rightFront",
    "leftFront",
    "leftMiddle",
    "leftBack",
    "rightBack",
]

const cases = 
    {
        params: {
            dimensions: DEFAULT_DIMENSIONS,
            gaitParams: {
                tx: 0,
                tz: 0,
                rx: 0,
                ry: 0,
                legStance: 0,
                hipStance: 25,
                stepCount: 1,
                hipSwing: 25,
                liftSwing: 40,
            },
        },
        result: { answer: true },
        description: "first sequence",
    }



   // var stepCount = cases.params.gaitParams.stepCount
   // cases.params.gaitParams.stepCount = 1
    const sequence1 = getWalkSequence(
         cases.params.dimensions,
         cases.params.gaitParams
    )
console.log("sequence1: ")
console.log(sequence1)
/*testSequence(sequence1, stepCount * 4)

    const sequence2 = getWalkSequence(
        cases.params.dimensions,
        cases.params.gaitParams,
        "ripple"
    )
    testSequence(sequence2, stepCount * 6)
*/

/*
test.each(cases)("test walkSequence:", example => {
    const stepCount = example.params.gaitParams.stepCount

    const sequence1 = getWalkSequence(
        example.params.dimensions,
        example.params.gaitParams
    )
    testSequence(sequence1, stepCount * 4)

    const sequence2 = getWalkSequence(
        example.params.dimensions,
        example.params.gaitParams,
        "ripple"
    )
    testSequence(sequence2, stepCount * 6)
})

const testSequence = (sequence, actualStepCount) => {
    POSITION_NAMES_LIST.forEach(position => {
        const alphaSeq = sequence[position].alpha
        const betaSeq = sequence[position].beta
        const gammaSeq = sequence[position].gamma

        expect(alphaSeq).toBeDefined()
        expect(alphaSeq).toHaveLength(actualStepCount)

        expect(betaSeq).toBeDefined()
        expect(betaSeq).toHaveLength(actualStepCount)

        expect(gammaSeq).toBeDefined()
        expect(gammaSeq).toHaveLength(actualStepCount)
    })
}

*/
