function solution(m, arr) {
  let answer = 0;
  let lp = 0;
  let sum = 0;
  for (let rp = 0; rp < arr.length; rp++) {
    sum += rp;
    while (sum > m) {
      sum -= arr[lp++];
    }
    answer += rp - lp + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

let b = [1, 3, 1, 2, 3, 2];
console.log(solution(5, b));

let c = [1, 1, 1, 1, 1];
console.log(solution(5, c));
