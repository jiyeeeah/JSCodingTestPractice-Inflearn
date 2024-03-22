function solution(m, songs) {
  let answer = Number.MAX_SAFE_INTEGER;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b);
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let sum = 0;
    let cnt = 1;
    for (let x of songs) {
      if (sum + x <= mid) sum += x;
      else {
        sum = x;
        cnt++;
      }
    }
    if (cnt <= m) {
      rt = mid - 1;
      answer = Math.min(answer, mid);
    } else lt = mid + 1;
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
