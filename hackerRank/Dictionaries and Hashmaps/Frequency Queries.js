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

// Complete the freqQuery function below.
function freqQuery(queries) {
  const freqMap = {};
  const countMap = {};
  const result = [];

  for (let [op, val] of queries) {
    if (op === 1) {
      let oldFreq = freqMap[val] || 0;
      let newFreq = oldFreq + 1;

      freqMap[val] = newFreq;

      if (oldFreq > 0) {
        countMap[oldFreq] = (countMap[oldFreq] || 0) - 1;
      }

      countMap[newFreq] = (countMap[newFreq] || 0) + 1;
    } else if (op === 2) {
      let oldFreq = freqMap[val] || 0;

      if (oldFreq > 0) {
        let newFreq = oldFreq - 1;

        freqMap[val] = newFreq;

        countMap[oldFreq]--;
        if (newFreq > 0) {
          countMap[newFreq] = (countMap[newFreq] || 0) + 1;
        }
      }
    } else if (op === 3) {
      result.push((countMap[val] || 0) > 0 ? 1 : 0);
    }
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const ans = freqQuery(queries);

  ws.write(ans.join('\n') + '\n');

  ws.end();
}
