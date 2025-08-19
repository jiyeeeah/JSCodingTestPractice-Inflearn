function solution(s) {
  const stack = [];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else if (s[i] === ")" && s[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a)); // 17

let b = "(((()(()()))(())()))(()())";
console.log(solution(b)); // 24
