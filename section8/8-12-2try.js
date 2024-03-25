function solution(n, r) {
  let answer;
  let arr = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if (arr[n][r] !== 0) return arr[n][r];
    if (n - r === 0 || r === 0) return 1;
    else {
      arr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));
