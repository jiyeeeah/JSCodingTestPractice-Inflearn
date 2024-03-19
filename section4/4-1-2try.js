function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let tmp = x;
    let sum = 0;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum >= max) {
      max = sum;
      answer = Math.max(answer, x);
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
