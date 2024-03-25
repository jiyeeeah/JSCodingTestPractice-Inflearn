function solution(n, arr) {
  let answer = 0;
  let ch = Array.from({ length: n + 1 }, () => false);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let i = 0; i < arr.length; i++) {
    graph[arr[i][0]][arr[i][1]] = 1;
  }
  function DFS(L) {
    if (L === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (i !== L && !ch[i] && graph[L][i] === 1) {
          ch[L] = true;
          DFS(i);
          ch[L] = false;
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
