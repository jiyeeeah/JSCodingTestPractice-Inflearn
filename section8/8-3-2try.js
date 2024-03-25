function solution(n) {
  let answer = "";
  function DFS(L) {
    if (L > 7) return;
    else {
      DFS(L * 2);
      DFS(L * 2 + 1);
      console.log(L);
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(1));
