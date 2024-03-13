function solution(n, k) {
  let answer = 0;
  let arr = Array.from({ length: n }, (_v, i) => i + 1);
  while (arr.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      arr.push(arr.shift());
    }
    arr.shift();
  }
  answer = arr.toString();
  return answer;
}

console.log(solution(8, 3));
