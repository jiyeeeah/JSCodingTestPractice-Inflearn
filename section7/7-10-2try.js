function solution(target, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  while (lt !== rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (target === arr[mid]) return mid + 1;
    else if (target > arr[mid]) lt = mid + 1;
    else rt = mid - 1;
  }
  answer = lt + 1;
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
