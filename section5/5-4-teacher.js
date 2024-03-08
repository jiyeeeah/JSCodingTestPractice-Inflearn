function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt];
    }
    answer += rt - lt + 1;
    // lt로 끝나는 경우의 수
    // (예를 들어 1, 2, 2이면 lt = 0 rt = 2 => 3개(1, 2, 2), (2, 2), (2))
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

let b = [1, 3, 1, 2, 3, 2];
console.log(solution(5, b));
