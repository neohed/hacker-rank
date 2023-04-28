
function getSlice(startIndex, len, a) {
    const res = []
    for (let i = startIndex; i < startIndex + len; i++) {
        res.push(a[i])
    }
    return res
}

const sum = a => a.reduce((acc, n) => acc + n, 0);

function birthday(s, d, m) {
    // Write your code here
    let res = 0;
    for (let i = 0; i < s.length - m + 1; i++) {
        if (sum(getSlice(i, m, s)) === d) {
            res++
        }
    }

    return res
}
