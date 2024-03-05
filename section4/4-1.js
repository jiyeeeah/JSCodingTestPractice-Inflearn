function solution(n, arr) {
  let answer;
  let max = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let num = arr[i];
    for (let j = 8; j >= 0; j--) {
      sum += Math.floor(num / 10 ** j);
      num = num % 10 ** j;
    }
    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      answer = Math.max(arr[i], answer);
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
