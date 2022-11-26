function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    let res = true;

    A.forEach((n, i) => {
        res &= (n + B[i]) >= k
    })

    if (res) {
        return 'YES'
    } else {
        return 'NO'
    }
}
