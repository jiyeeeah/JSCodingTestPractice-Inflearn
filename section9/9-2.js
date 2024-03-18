function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => false);
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(V) {
    if (V === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[V][i] !== 0 && !ch[V]) {
          ch[V] = true;
          DFS(i);
          ch[V] = false;
        }
      }
    }
  }

  ch[1] = true; // 첫 정점은 체크를 미리 해줘야함
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
