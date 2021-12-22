import {
    angleBetween,
    projectedVectorOntoPlane,
    getNormalofThreePoints,
    angleOppositeOfLastSide,
    isCounterClockwise,
} from "../hexapod/geometry.js"


import { expectVectorsToHaveSameXYZ } from "./helpers.js"
import {
    ANGLE_BETWEEN_CASES,
    PROJECTED_VECTOR_CASES,
    NORMAL_OF_THREE_POINTS_CASES,
    ANGLE_OPPOSITE_LAST_SIDE_CASES,
    IS_CCW_CASES,
} from "./cases/geometry/index.js"

function test1(ANGLE_BETWEEN_CASES){


	const thisCase = ANGLE_BETWEEN_CASES[0] 
	const { vectorA, vectorB } = thisCase.params
        var  angle = angleBetween(vectorA, vectorB)
  var	va = {x:1, y:0,z:0}
  var	vb = {x:0,y:0,z:1}
 	angle = angleBetween(va, vb)

	console.log("angle: ")	
	console.log(angle)

}


test2(PROJECTED_VECTOR_CASES)(
    "Should yield correct results for projectedVectorOntoPlane %p",
    thisCase => {
        const { vectorV, vectorN } = thisCase.params
        const vectorProjected = projectedVectorOntoPlane(vectorV, vectorN)
        expectVectorsToHaveSameXYZ(vectorProjected, thisCase.result.vectorProjected)
    }
)

test2(PROJECTED_VECTOR_CASES)
//test1(ANGLE_BETWEEN_CASES)
