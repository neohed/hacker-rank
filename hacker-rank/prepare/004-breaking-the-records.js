function breakingRecords(scores) {
    const {minCount, maxCount} = scores.reduce((acc, n) => {
        let {min, max, minCount, maxCount} = acc;

        if (n < min) {
            min = n;
            minCount++
        }
        if (n > max) {
            max = n;
            maxCount++
        }
        return {min, max, minCount, maxCount}
    }, {
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER,
        minCount: -1,
        maxCount: -1
    })

    return [maxCount, minCount]
}
