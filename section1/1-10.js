function solution(s, t) {
  let answer = 0;
  for (let letter of s) {
    if (letter === t) answer += 1;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
