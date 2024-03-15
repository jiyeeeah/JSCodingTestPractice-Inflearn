function solution(s, t) {
  let answer = Array.from({ length: s.length }, () => 1000);
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      cnt = 0;
      answer[i] = cnt;
    } else answer[i] = Math.min(answer[i], ++cnt);
  }

  cnt = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      cnt = 0;
      answer[i] = Math.min(answer[i], cnt);
    } else answer[i] = Math.min(answer[i], ++cnt);
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
