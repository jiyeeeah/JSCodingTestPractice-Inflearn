function solution(arr) {
  let answer = arr;
  answer.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (answer[j][0] === answer[j + 1][0] && answer[j][1] > answer[j + 1][1]) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
