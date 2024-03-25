function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        dy[i] = Math.max(dy[i], dy[j] + 1);
      }
    }
  }
  answer = Math.max(...dy);
  return answer;
}

let arr1 = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr1)); // 4

let arr2 = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(arr2)); // 5
