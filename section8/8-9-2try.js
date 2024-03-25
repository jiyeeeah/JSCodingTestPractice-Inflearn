function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L, sum) {
    if (L >= answer) return;
    if (sum < 0) return;
    if (sum === 0) answer = Math.min(L, answer);
    else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum - arr[i]);
      }
    }
  }
  DFS(0, m);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
