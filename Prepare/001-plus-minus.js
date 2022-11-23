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
    const {countPositive, countNegative, countZero}
        = arr.reduce((acc, n) => {
            let {countPositive, countNegative, countZero} = acc;
            if (n === 0) {
                countZero++
            } else if (n < 0) {
                countNegative++
            } else {
                countPositive++
            }
            
            return {
                countPositive, countNegative, countZero
            }
        }, {
            countPositive: 0,
            countNegative: 0,
            countZero: 0
        });
        
    const ratioPositive = countPositive / arr.length;
    const ratioNegative = countNegative / arr.length;
    const ratioZero = countZero / arr.length;
    
    console.log(ratioPositive.toFixed(6));
    console.log(ratioNegative.toFixed(6));
    console.log(ratioZero.toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
