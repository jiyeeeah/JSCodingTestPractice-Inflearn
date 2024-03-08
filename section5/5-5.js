function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let lt = 0;
  for (let rt = lt + k; rt < arr.length; rt++) {
    if (sum > answer) answer = sum;
    sum += arr[rt];
    sum -= arr[lt++];
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
