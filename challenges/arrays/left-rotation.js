function rotLeft(a, d) {
    let rot = d % a.length;
    while (rot--) {
        const x = a.shift();
        a.push(x)
    }
    return a
}
