const reverse = s => s.split('').reverse().join('')

function binaryRange(n) {
    const bin = 2**n;
    return Array(bin)
        .fill(null)
        .map(
            (_, i) => reverse(i.toString(2)).padEnd(n, '0')
        )
}

function parseBits(arr) {
    return arr.map(s => s.split('').map(n => parseInt(n)))
}

const bits = parseBits(binaryRange(4));

function sumGridQuadrant(matrix) {
    const N2 = matrix.length;
    const N = N2 / 2;

    let a = 0, b = 0, c = 0, d = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            a += matrix[i][j];
            //b += matrix[i][N + j];
            //c += matrix[N + i][j];
            //d = matrix[N + i][N + j]
        }
    }

    return Math.max(a, b, c, d)
}

function copyMatrix(matrix) {
    const copy = new Array(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
        copy[i] = [...matrix[i]]
    }
    return copy
}

function flipRow(matrix, row) {
    const N2 = matrix.length - 1;
    const N = N2 / 2;

    for (let i = 0; i < N; i++) {
        const theRow = matrix[row];
        const temp = theRow[N2 - i];
        theRow[N2 - i] = theRow[i];
        theRow[i] = temp
    }
}

function flipColumn(matrix, column) {
    const N2 = matrix.length - 1;
    const N = N2 / 2;

    for (let i = 0; i < N; i++) {
        const temp = matrix[N2 - i][column];
        matrix[N2 - i][column] = matrix[i][column];
        matrix[i][column] = temp
    }
}

const test = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
]
// 414

function flippingMatrix(matrix) {
    let total = 0;

    for (let i = 0; i < bits.length; i++) {
        const rowMod = bits[i];

        for (let j = 0; j < bits.length; j++) {
            const colMod = bits[j];
            const copy = copyMatrix(matrix);
            for (let k = 0; k < rowMod.length; k++) {
                if (rowMod[k] === 1) {
                    flipRow(copy, k)
                }
                if (colMod[k] === 1) {
                    flipColumn(copy, k)
                }
            }

            //console.log(copy)
            total = Math.max(total, sumGridQuadrant(copy))
        }
    }

    return total
}

//console.log(flippingMatrix(test))
flipColumn(test, 2)
console.log(test)
flipRow(test, 0)
console.log(test)

console.log(sumGridQuadrant(test))
