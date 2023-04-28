/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    arr.sort();

    const min = arr.slice(0, arr.length - 1).reduce((acc, n) => acc + n, 0);
    const max = arr.slice(1).reduce((acc, n) => acc + n, 0);

    console.log(`${min} ${max}`)
}
