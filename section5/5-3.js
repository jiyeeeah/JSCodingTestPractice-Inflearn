function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = (rt = 0);
  while (rt < arr.length) {
    if (sum === m) {
      answer++;
      sum -= arr[lt++];
    } else if (sum < m) {
      sum += arr[rt++];
    } else if (sum > m) {
      sum -= arr[lt++];
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
