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

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
  const charFreq = new Map();
  const freqCount = new Map();

  for (let ch of s) {
    charFreq.set(ch, (charFreq.get(ch) || 0) + 1);
  }

  for (let freq of charFreq.values()) {
    freqCount.set(freq, (freqCount.get(freq) || 0) + 1);
  }

  if (freqCount.size === 1) {
    return 'YES';
  } else if (freqCount.size === 2) {
    const [[f1, c1], [f2, c2]] = [...freqCount.entries()];

    if ((f1 === 1 && c1 === 1) || (f2 === 1 && c2 === 1)) {
      return 'YES';
    }

    if (
      Math.abs(f1 - f2) === 1 &&
      ((f1 > f2 && c1 === 1) || (f2 > f1 && c2 === 1))
    ) {
      return 'YES';
    }
    return 'NO';
  } else {
    return 'NO';
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = isValid(s);

  ws.write(result + '\n');

  ws.end();
}
