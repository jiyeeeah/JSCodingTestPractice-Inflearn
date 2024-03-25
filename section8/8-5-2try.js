function solution(arr) {
  let answer = false;
  let n = arr.length;
  let sum = arr.reduce((a, b) => a + b);
  function DFS(L, s) {
    if (L === n) {
      if (sum - s === s) {
        answer = true;
        return;
      }
    } else {
      DFS(L + 1, s + arr[L]);
      DFS(L + 1, s);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
