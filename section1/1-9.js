function solution(s) {
  let answer;
  let stringArr = s.split("");
  let answerArr = stringArr.map((v) => {
    if (v === "A") return "#";
    else return v;
  });
  answer = answerArr.join("");
  return answer;
}

let str = "BANANA";
console.log(solution(str));
