function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => false);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(V) {
    if (V === n) answer++;
    else {
      for (let i = 0; i < graph[V].length; i++) {
        if (!ch[graph[V][i]]) {
          ch[graph[V][i]] = true;
          DFS(graph[V][i]);
          ch[graph[V][i]] = false;
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
