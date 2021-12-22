
const buildSequence = (startVal, delta, stepCount) => {
    const step = delta / stepCount

    let currentItem = startVal
    let array = []
    for (let i = 0; i < stepCount; i++) {
        currentItem += step
        array.push(currentItem)
    }

    return array
}

var returnarray = buildSequence(10,0.2,10)
 returnarray.forEach(element => console.log(element));
console.log(returnarray)
