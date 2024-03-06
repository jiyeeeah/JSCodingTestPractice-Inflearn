function solution(n, k, card) {
  let answer;
  let sumArr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i === j || j === k || k === i) continue;
        let sum = card[i] + card[j] + card[k];
        if (!sumArr.includes(sum)) sumArr.push(sum);
      }
    }
  }
  sumArr.sort((a, b) => b - a);
  answer = sumArr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
