function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(5), () => Array(5).fill(0));
  for (let edge of arr) {
    graph[edge[0] - 1][edge[1] - 1] = 1;
  }

  let ch = Array.from({ length: n + 1 }, () => false);
  function DFS(N) {
    if (N === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[N - 1][i - 1] !== 0 && !ch[N]) {
          ch[N] = true;
          DFS(i);
          ch[N] = false;
        }
      }
    }
  }
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
