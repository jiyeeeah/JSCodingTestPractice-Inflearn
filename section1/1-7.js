function solution(day, arr) {
  let answer = 0;
  let splitArr = arr.map((v) => String(v).split(""));
  for (let s of splitArr) {
    if (s[1] === String(day)) {
      answer += 1;
    }
  }
  return answer;
}

arr1 = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr1));

arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr2));
