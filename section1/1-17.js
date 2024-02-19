function solution(s) {
  let answer = [];
  for (let w of s) {
    if (!answer.includes(w)) answer.push(w);
  }
  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
