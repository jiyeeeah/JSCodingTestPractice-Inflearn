function solution(m, arr) {
  let answer = 0;
  let lt = (rt = 0);
  let sum = arr[lt];
  while (rt < arr.length) {
    if (sum <= m) {
      answer++;
      sum += arr[++rt];
    } else if (sum > m) {
      sum = arr[lt++];
      rt = lt;
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

let b = [1, 3, 1, 2, 3, 2];
console.log(solution(5, b));

let c = [1, 1, 1, 1, 1];
console.log(solution(5, c));
