function solution(n, arr) {
  let answer = 0;
  let ch = Array.from({ length: n + 1 }, () => false);
  let graph = Array.from(Array(n + 1), () => []);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(L) {
    if (L === n) answer++;
    else {
      for (let x of graph[L]) {
        if (!ch[x]) {
          ch[x] = true;
          DFS(x);
          ch[x] = false;
        }
      }
    }
  }
  ch[1] = true;
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
