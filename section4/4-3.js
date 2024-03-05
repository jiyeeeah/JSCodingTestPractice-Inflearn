function solution(test) {
  let answer = 0;
  let n = test.length;
  let m = test[0].length;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
      let cnt = 0; //이 변수가 필요함. test 횟수 다 적합한지 확인해야
      for (let k = 0; k < n; k++) {
        if (test[k].indexOf(i) < test[k].indexOf(j)) {
          cnt++;
        }
      }
      if (cnt === n) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
