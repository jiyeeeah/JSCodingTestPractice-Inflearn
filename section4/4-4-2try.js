function solution(m, product) {
  let answer = 0;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < product.length; i++) {
    let tmp = [...product];
    tmp[i] = [tmp[i][0] / 2, tmp[i][1]]; // 하나 뽑아서 할인 쿠폰 먹임
    // 나머지 중에서 예산 안 넘게
    let sum = 0;
    let cnt = 0;
    for (let j = 0; j < tmp.length; j++) {
      let cost = tmp[j][0] + tmp[j][1];
      if (sum + cost <= m) {
        cnt++;
        sum += cost;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
