function solution(s) {
  let answer = true;
  s = s.toLowerCase();
  len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    let num = s[i].charCodeAt();
    if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
      if (s[i] !== s[len - i - 1]) return false;
    }
  }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
