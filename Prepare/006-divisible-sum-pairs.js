const ar = [1, 3, 2, 6, 1, 2]
const k = 3

function divisibleSumPairs(n, k, ar) {
    let res = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                res++
            }
        }
    }

    return res
}

console.log(divisibleSumPairs(ar.length, k, ar))
