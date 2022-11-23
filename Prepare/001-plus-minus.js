'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

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

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
