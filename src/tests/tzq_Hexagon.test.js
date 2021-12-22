import Hexagon from "../hexapod/Hexagon.js"
import { tRotXYZmatrix } from "../hexapod/geometry.js"
import { expectToBeEqualPoints } from "./helpers.js"
import CASE1 from "./cases/Hexagon/case1.js"

const CASES = [CASE1]
var thisCase = CASE1

       var { rx, ry, rz, tx, ty, tz } = thisCase.params.transformParams
       
 
 rx = 0
ry = 0
rz =0 

       console.log("rx ry rz: ")
       console.log(rx)
       console.log(ry)
       console.log(rz)


 const startHexagon = new Hexagon(thisCase.params.dimensions)
        const transformMatrix = tRotXYZmatrix(rx, ry, rz)

console.log("transformMatrix: ")
console.log(transformMatrix) 
// prettier-ignore
        const testPoints = startHexagon
            .cloneShift(tx, ty, tz)
            .cloneTrot(transformMatrix).allPointsList

console.log("result: ")
       console.log(thisCase.result)

