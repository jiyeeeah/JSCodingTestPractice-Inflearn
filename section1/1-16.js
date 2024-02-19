function solution(s) {
  let answer = "";
  for (let l of s) {
    if (!answer.includes(l)) answer += l;
  }
  return answer;
}

console.log(solution("ksekkset"));
console.log(solution("aaatbcabtd"));
