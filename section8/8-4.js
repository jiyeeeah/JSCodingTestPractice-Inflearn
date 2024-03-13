function solution(n) {
  let answer = [];
  function DFS(v) {
    if (v > n) {
      console.log(answer);
    } else {
      answer.push(v);
      DFS(v + 1);
      answer.pop();
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
