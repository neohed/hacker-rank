function getSum(x, y, arr) {
    return arr[y][x] + arr[y][x + 1] + arr[y][x + 2]
        + arr[y + 1][x + 1]
        + arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2]
}

function hourglassSum(arr) {
    let res = Number.MIN_SAFE_INTEGER;
    for (let x = 0; x <= 3; x++) {
        for (let y = 0; y <= 3; y++) {
            res = Math.max(res, getSum(x, y, arr))
        }
    }
    return res
}
