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
    let positives_count = 0;
    let negatives_count = 0;
    let zeros_count = 0;
    
    for (let value of arr) {
        if (value == 0) {
            zeros_count++;
        } else if (value > 0) {
            positives_count++;
        } else {
            negatives_count++;
        }
    }
    
    let positives_ratio = positives_count / arr.length;
    let negatives_ratio = negatives_count / arr.length;
    let zeros_ratio = zeros_count / arr.length;

    process.stdout.write(positives_ratio.toFixed(6) + '\n');
    process.stdout.write(negatives_ratio.toFixed(6) + '\n');
    process.stdout.write(zeros_ratio.toFixed(6) + '\n');
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
