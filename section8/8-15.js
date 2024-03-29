function solution(k, arr, m) {
  let answer = 0;
  function DFS(L, S, sum) {
    if (L === k && sum % m === 0) {
      answer++;
    } else {
      for (let i = S; i < arr.length; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(3, arr, 6));
