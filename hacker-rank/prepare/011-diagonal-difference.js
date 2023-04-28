const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]

function diagonalDifference(arr) {
    let diag1 = 0,
        diag2 = 0;
    const size = arr.length;

    for (let i = 0; i < size; i++) {
        diag1 += arr[i][i];
        diag2 += arr[i][size - 1 - i]
    }

    return Math.abs(diag1 - diag2)
}

console.log(diagonalDifference(arr))
