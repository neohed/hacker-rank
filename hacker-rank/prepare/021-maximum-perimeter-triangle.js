function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => a - b);
    let i = sticks.length - 1;
    while (i > 1 && sticks[i - 2] + sticks[i - 1] <= sticks[i]) {
        i--
    }

    if (sticks[i - 2] + sticks[i - 1] > sticks[i]) {
        return sticks.slice(i - 2, i + 1)
    } else {
        return [-1]
    }
}
