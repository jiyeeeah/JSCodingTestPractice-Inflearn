function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  for (let x of arr1) {
    for (let y of arr2) {
      if (x === y) answer.push(x);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
