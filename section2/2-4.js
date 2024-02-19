function solution(arr) {
  let answer = 0;
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && tmp.length > 0) {
      answer += tmp.length + 1;
      tmp.push(1);
    } else if (arr[i] === 1 && tmp.length === 0) {
      tmp.push(1);
      answer += 1;
    } else if (arr[i] === 0) tmp = [];
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
