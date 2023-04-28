const arr = [1, 1, 3, 2, 1]

function countingSort(arr) {
    const frequency = new Array(100).fill(0);

    arr.forEach(n => frequency[n] = frequency[n] + 1);

    return frequency
}

console.log(countingSort(arr))
