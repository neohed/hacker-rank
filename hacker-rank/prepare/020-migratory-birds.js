function migratoryBirds(arr) {
    const x = arr.reduce((acc, n) => {
        const i = n - 1;
        acc[i] = acc[i] + 1;
        return acc
    }, [0, 0, 0, 0, 0]);

    const m = Math.max(...x);

    for (let i = 0; i < x.length; i++) {
        if (x[i] === m) {
            return i + 1
        }
    }
}
