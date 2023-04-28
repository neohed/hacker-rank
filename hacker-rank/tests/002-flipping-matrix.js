const test = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
]
// 414

function flippingMatrix(matrix) {
    const N2 = matrix.length - 1;
    const N = N2 / 2;
    let total = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const tr = matrix[i][j];
            const tl = matrix[i][N2 - j];
            const bl = matrix[N2 - i][j];
            const br = matrix[N2 - i][N2 - j];

            total += Math.max(tr, tl, bl, br)
        }
    }

    return total
}

console.log(flippingMatrix(test))
