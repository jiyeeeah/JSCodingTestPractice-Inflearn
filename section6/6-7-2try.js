function solution(need, plan) {
  let answer = false;
  let tmp = "";
  for (let x of plan) {
    if (need.includes(x)) tmp += x;
  }
  if (tmp === need) answer = true;
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
