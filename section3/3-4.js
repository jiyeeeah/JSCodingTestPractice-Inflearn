function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let letter of s) {
    if (letter === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = 0; i < s.length; i++) {
    if (s[s.length - i - 1] === t) {
      p = 0;
      if (p < answer[answer.length - i - 1]) {
        answer[answer.length - i - 1] = p;
      }
    } else {
      p++;
      if (p < answer[answer.length - i - 1]) {
        answer[answer.length - i - 1] = p;
      }
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
