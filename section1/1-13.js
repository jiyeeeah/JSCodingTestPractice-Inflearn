function solution(s) {
  let answer = "";
  for (let l of s) {
    if (l === l.toUpperCase()) answer += l.toLowerCase();
    else if (l === l.toLowerCase()) answer += l.toUpperCase();
  }
  return answer;
}

console.log(solution("StuDY"));
