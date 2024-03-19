function isPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let tmp = x;
    let fin = 0;
    while (tmp) {
      fin = fin * 10 + (tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    if (isPrime(fin)) answer.push(fin);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
