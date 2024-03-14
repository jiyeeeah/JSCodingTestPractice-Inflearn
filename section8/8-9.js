function solution(m, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let sum = m;
  for (let i = arr.length; i >= 0; i--) {
    if (sum / arr[i] >= 1) {
      answer = Math.floor(sum / arr[i]);
      sum -= arr[i] * answer;
    }
  }
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
