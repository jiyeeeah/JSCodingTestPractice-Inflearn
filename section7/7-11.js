function solution(m, songs) {
  let answer = 0;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b);
  let mid = Math.floor((lt + rt) / 2);
  while (lt <= rt) {
    let cnt = 1;
    let sum = 0;
    for (let x2 of songs) {
      if (sum + x2 <= mid) {
        sum += x2;
      } else {
        cnt++;
        sum = x2;
      }
    }
    if (cnt <= m) {
      answer = mid;
      rt = mid - 1;
      mid = Math.floor((lt + rt) / 2);
    } else {
      lt = mid + 1;
      mid = Math.floor((lt + rt) / 2);
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
