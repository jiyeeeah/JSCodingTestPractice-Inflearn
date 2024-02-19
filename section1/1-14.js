function solution(n, s) {
  let answer = "";
  let max = 0;

  for (let a of s) {
    if (a.length > max) {
      max = a.length;
      answer = a;
    }
  }
  return answer;
}

let str = ["teacher", "time", "students", "beautiful", "hello"];
console.log(solution(5, str));
