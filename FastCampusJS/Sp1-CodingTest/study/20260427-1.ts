/**
 * 정수 배열을 받아서 오름차순으로 정렬해 반환하는 함수를 구현하세요.
 * 단, JavaScript/TypeScript 내장 sort()는 사용 금지입니다.
 *
 * 입력: [64, 25, 12, 22, 11]
 * 출력: [11, 12, 22, 25, 64]
 * @param arr
 */

function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIdx]) {
        minIdx = j;
      }
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// 테스트
console.log(selectionSort([64, 25, 12, 22, 11]));
// 기대값: [11, 12, 22, 25, 64]