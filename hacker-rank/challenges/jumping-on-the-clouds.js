function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    do {
        jumps++;
        if (c[i + 2] === 0) {
            i += 2
        } else {
            i++
        }
    } while (i < c.length - 1);

    return jumps;
}
