function solution(n) {
  let answer = "";
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(Math.floor(L / 2));
      answer += String(L % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
console.log(solution(123));
