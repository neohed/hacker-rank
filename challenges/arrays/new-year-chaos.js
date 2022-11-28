function minimumBribes(q) {
    let chaos = false;
    let i = 0;
    let bribes = 0;

    do {
        if (q[i] - 1 - i > 0) {
            const diff = q[i] - i - 1;
            bribes += diff;
            chaos = diff > 2;
        }
        i++
    } while (!chaos && i < q.length)

    if (chaos) {
        console.log('Too chaotic.')
    } else {
        console.log(bribes)
    }
}

minimumBribes([2, 1, 5, 3, 4]) // 3
minimumBribes([2, 5, 1, 3, 4]) // chaos
