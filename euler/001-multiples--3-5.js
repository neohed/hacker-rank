function findSum_slow(n) {
    let c3 = 3;
    let c5 = 5;
    let res = 0;

    do {
        if (c3 < c5) {
            res += c3;
            c3 += 3
        } else {
            if (c3 !== c5) {
                res += c5
            }

            c5 += 5
        }
    } while (c3 < n || c5 < n)

    return res
}

function correct(n) {
    let res = 0;
    for (let i = 3; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            res += i
        }
    }
    return res
}

function g(n, d) {
    const nd = Math.floor(n / d);

    return d * nd * (nd + 1) / 2
}
function findSum(n) {
    if (n < 3) {
        return 0
    }
    return g(n - 1, 3) + g(n - 1, 5) - g(n - 1, 15)
}

[-1, 0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,100,2318].forEach(n => {
    const res1 = correct(n);
    const fast = findSum(n)
    console.log(`${n} ${res1 === fast} Slow version = ${res1} fast = ${fast}`)
})
