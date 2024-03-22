function solution(n) {
  function DFS(L) {
    if (L > n) return;
    else {
      console.log(L);
      DFS(L + 1);
    }
  }
  DFS(1);
}

solution(3);
