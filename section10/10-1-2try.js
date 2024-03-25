function solution(n) {
  let answer = 0;
  let step = Array.from({ length: n + 1 }, () => 0);
  step[1] = 1;
  step[2] = 2;
  for (let i = 3; i <= n; i++) {
    step[i] = step[i - 2] + step[i - 1];
  }
  answer = step[n];
  return answer;
}

console.log(solution(7));
