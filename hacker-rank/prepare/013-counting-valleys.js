const path = 'UDDDUDUU'

function countingValleys(steps, path) {
    let inValley = false;
    let height = 0;
    let valleyCount = 0;

    for (let i = 0; i < path.length; i++) {
        const char = path[i];

        if (char === 'U') {
            height++
        } else {
            height--
        }

        if (!inValley && height < 0) {
            inValley = true;
            valleyCount++
        }

        if (height === 0) {
            inValley = false
        }
    }

    return valleyCount
}

console.log(countingValleys(path.length, path))
