'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
  const left = {};
  const right = {};
  let count = 0;

  // init
  for (let num of arr) {
    right[num] = (right[num] || 0) + 1;
  }

  // array
  for (let num of arr) {
    right[num]--;

    if (num % r === 0) {
      let leftValue = num / r;
      let rightValue = num * r;

      let leftCount = left[leftValue] || 0;
      let rightCount = right[rightValue] || 0;

      count += leftCount * rightCount;
    }
    left[num] = (left[num] || 0) + 1;
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nr = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + '\n');

  ws.end();
}
