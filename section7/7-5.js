function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    if (answer.includes(arr[i])) {
      // hit일 때
      for (let j = answer.length - 1; j >= 1; j--) {
        if (answer[j] === arr[i]) {
          answer[j] = answer[j - 1];
          answer[j - 1] = arr[i];
        }
      }
    } else {
      // miss일때;
      for (let j = answer.length - 1; j >= 1; j--) {
        answer[j] = answer[j - 1];
      }
    }
    answer[0] = arr[i];
  }
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
