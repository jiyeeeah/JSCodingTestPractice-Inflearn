function solution(n) {
  let answer = 0;
  let arrival = n + 1;
  let dy = Array.from({ length: arrival + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= arrival; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[arrival];
  return answer;
}

console.log(solution(7));
