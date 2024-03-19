function solution(n) {
  let answer = 0;
  function DFS(step) {
    if (step > n) return;
    if (step === n) answer++;
    else {
      DFS(step + 1);
      DFS(step + 2);
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(7));
