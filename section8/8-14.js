function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, S) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = S; i <= n; i++) {
        // i 가 뽑은 숫자임
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
