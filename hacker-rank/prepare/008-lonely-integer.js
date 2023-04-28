const numbers = [
    1, 2, 3, 4, 3, 2, 1
]

function lonelyInteger(a) {
    let found = false;
    let n;
    let i = -1;

    do {
        i++;
        n = a[i];
        found = a.find((element, index) => index !== i && element === n) !== undefined
    } while (found && i < a.length)

    return a[i]
}

console.log(lonelyInteger(numbers))
