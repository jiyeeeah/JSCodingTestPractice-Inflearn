function solution(n, k, card) {
  let answer = 0;
  let sumArr = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let l = 0; l < n; l++) {
        if (i === j || j === l || l === i) continue;
        sumArr.add(card[i] + card[j] + card[l]);
      }
    }
  }
  sumArr = [...sumArr].sort((a, b) => b - a);
  answer = sumArr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
