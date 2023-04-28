function sockMerchant(n, ar) {
    const colourCounts = ar.reduce(
        (acc, x) => {
            if (acc[x] === undefined) {
                acc[x] = 1;
            } else {
                acc[x] = acc[x] + 1
            }

            return acc
        },
        {})

    return Object.values(colourCounts).map(n => Math.floor(n / 2)).reduce((acc, x) => acc + x, 0)
}
