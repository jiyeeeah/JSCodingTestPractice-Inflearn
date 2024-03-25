function solution(n, m) {
  let answer = [];
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = 0; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  answer.push(n * n);
  return answer;
}

console.log(solution(3, 2));
