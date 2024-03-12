function count(stable, minLength) {
  let cnt = 1;
  let prior = stable[0];
  for (let i = 0; i < stable.length; i++) {
    if (stable[i] >= prior + minLength) {
      cnt++;
      prior = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < stable.length - 1; i++) {
    lt = Math.min(stable[i + 1] - stable[i], lt);
  }
  let rt = stable[stable.length - 1] - stable[0];
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
}

let arr1 = [1, 2, 8, 4, 9];
console.log(solution(3, arr1));

let arr2 = [1, 3, 6, 9, 5, 7, 10];
console.log(solution(3, arr2));

let arr3 = [5, 6, 8, 12, 14];
console.log(solution(3, arr3));
