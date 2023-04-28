function repeatedString(s, n) {
    const countA = s.split('').filter(s => s === 'a').length;
    let res = countA * Math.floor(n / s.length);
    for (let i = 0; i < n % s.length; i++) {
        if (s[i] === 'a') {
            res ++
        }
    }
    return res
}
