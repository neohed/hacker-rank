/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const ratioPositive = arr.filter(n => n > 0).length / arr.length;
    const ratioNegative = arr.filter(n => n < 0).length / arr.length;
    const ratioZero = arr.filter(n => n === 0).length / arr.length;

    console.log(ratioPositive.toFixed(6));
    console.log(ratioNegative.toFixed(6));
    console.log(ratioZero.toFixed(6))
}
