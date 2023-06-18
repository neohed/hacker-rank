const {arr} = require('../../../data');

const testCases = [
    {
        arr: [1, 2, 3, 4],
        res: 0
    }, {
        arr: [1, 2, 4, 3],
        res: 1
    }, {
        arr: [1, 4, 2, 3],
        res: 2
    }, {
        arr: [1, 4, 3, 2],
        res: 3
    }, {
        arr: [2, 1, 4, 3],
        res: 2
    }, {
        arr: [2, 1, 5, 3, 4],
        res: 3
    }, {
        arr: [2, 5, 1, 3, 4],
        res: 'Too chaotic'
    }, {
        arr: [5, 1, 2, 3, 7, 8, 6, 4],
        res: 'Too chaotic'
    }, {
        arr: [1, 2, 5, 3, 7, 8, 6, 4],
        res: 7
    }, {
        arr: [1, 2, 5, 3, 4, 7, 8, 6],
        res: 4
    }, {
        arr,
        res: 966
    }
]

function minimumBribes(q) {
    let i = 0;
    let bribes = 0;
    let next = [1, 2, 3];

    do {
        // Add index of next array if found in there and not actual_expected (i.e. equal to i + 1)
        const current = q[i];
        const expected = next.shift();
        const actualDiff = current - 1 - i;

        if (actualDiff > 2) {
            return 'Too chaotic'
        } else {
            let bribeInc = 0;
            if (actualDiff === 1 || actualDiff === 2) {
                bribeInc = actualDiff
            } // unchecked < 1

            if (current !== expected) {
                next.unshift(expected);

                if (next.includes(current)) {
                    bribeInc = next.indexOf(current);
                    next = next.filter(n => n !== current)
                }
            }

            bribes += bribeInc;
            next.push(i + 4)
        }

        i++
    } while (i < q.length)

    return bribes
}

testCases.forEach(({arr, res}, i) => {
    const actual = minimumBribes(arr);
    if (actual === res) {
        console.log(`Test ${i} passed`)
    } else {
        console.log(`Test ${i} FAIL! Expected: ${res}, actual: ${actual}`);
        console.log(arr)
    }
})
