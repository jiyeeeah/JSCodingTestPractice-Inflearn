function solution(n, r) {
  let answer;
  function DFS(n, r) {
    if (n - r === 0 || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));
