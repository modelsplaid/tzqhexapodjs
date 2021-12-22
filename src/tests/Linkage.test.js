import CASE1 from "./cases/Linkage/case1.js"
import CASE2 from "./cases/Linkage/case2.js"
import Linkage from "../hexapod/Linkage.js"
import { POSITION_NAME_TO_ID_MAP } from "../hexapod/constants.js"
import { expectToBeEqualPoints } from "./helpers.js"
const CASES = [CASE1, CASE2]

const { params, result } = CASE1


const linkage = new Linkage(
        params.dimensions,
        params.position,
        params.bodyContactPoint,
        params.pose
    )

const { allPointsList } = linkage
console.log(allPointsList)
console.log( params.position)

console.log("1111111111111111111111")
console.log( params.dimensions)

/*
test.each(CASES)("Should Initialize Linkage: %p", thisCase => {
    const { params, result } = thisCase
    const linkage = new Linkage(
        params.dimensions,
        params.position,
        params.bodyContactPoint,
        params.pose
    )

    const { allPointsList } = linkage

    expect(linkage.id).toBe(POSITION_NAME_TO_ID_MAP[params.position])
    expect(linkage.name).toBe(params.position + "Leg")

    expect(linkage.bodyContactPoint).toBe(allPointsList[0])
    expect(linkage.coxiaPoint).toBe(allPointsList[1])
    expect(linkage.femurPoint).toBe(allPointsList[2])
    expect(linkage.footTipPoint).toBe(allPointsList[3])

    expectToBeEqualPoints(linkage.bodyContactPoint, result.bodyContactPoint)
    expectToBeEqualPoints(linkage.coxiaPoint, result.coxiaPoint)
    expectToBeEqualPoints(linkage.femurPoint, result.femurPoint)
    expectToBeEqualPoints(linkage.footTipPoint, result.footTipPoint)
})
*/
