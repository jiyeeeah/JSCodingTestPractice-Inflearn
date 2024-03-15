function solution(n) {
  let answer = 1;
  function DFS(L, fac) {
    if (L <= 0) {
      answer = fac;
    } else {
      DFS(L - 1, fac * L);
    }
  }
  DFS(n, 1);
  return answer;
}

console.log(solution(5));
