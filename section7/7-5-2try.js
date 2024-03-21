function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  for (let x of arr) {
    if (!answer.includes(x)) {
      for (let i = size - 2; i >= 0; i--) answer[i + 1] = answer[i];
    } else {
      for (let j = answer.indexOf(x) - 1; j >= 0; j--) {
        answer[j + 1] = answer[j];
      }
    }
    answer[0] = x;
  }
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
