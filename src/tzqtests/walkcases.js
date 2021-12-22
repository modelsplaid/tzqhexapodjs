const DEFAULT_DIMENSIONS = 0
const cases = [
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
                stepCount: 5,
                hipSwing: 25,
                liftSwing: 40,
            },
        },
        result: { answer: true },
        description: "first sequence",
    },
]

var gaitParams = cases[0].params
console.log(gaitParams )

/*
console.log(cases.params)
var stepCount = cases.params.gaitParams

console.log("stepCount:")
*/
