function solution(n, m) {
  let answer = [];
  let tmp = [];
  function DFS(L, sp) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = sp; i <= n; i++) {
        tmp.push(i);
        DFS(L + 1, i + 1);
        tmp.pop();
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
