function solution(s) {
  let answer = true;
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    reverse += s[s.length - 1 - i];
  }
  if (s.toLowerCase() !== reverse.toLowerCase()) answer = false;
  return answer;
}

let str = "goooG";
console.log(solution(str));
