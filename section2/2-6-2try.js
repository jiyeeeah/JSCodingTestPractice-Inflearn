function solution(arr) {
  let answer = 0;
  // 각 행의 합
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    answer = Math.max(answer, sum);
  }

  // 각 열의 합
  let sumArr = Array.from({ length: arr[0].length }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sumArr[j] += arr[i][j];
    }
  }
  answer = Math.max(answer, ...sumArr);

  // 두 대각선의 합
  let sideSum1 = 0;
  let sideSum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sideSum1 += arr[i][i];
    sideSum2 += arr[i][arr.length - 1 - i];
  }
  answer = Math.max(answer, sideSum1, sideSum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
