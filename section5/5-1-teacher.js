function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    // 둘 중 하나라도 false되면 멈춤
    if (arr1[p1] <= arr2[p2])
      answer.push(arr1[p1++]); //p1인덱스 값이 들어가고 나서 1 증가하는 것임 (++는 후행 연산자)
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
