function solution(meeting) {
  let answer = 1;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let ep = meeting[0][1];
  for (let x of meeting) {
    if (x[0] >= ep) {
      ep = x[1];
      answer++;
    }
  }
  return answer;
}

let arr1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr1));

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr2));
