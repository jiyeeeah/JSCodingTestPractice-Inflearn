function solution(str) {
  let str2 = str.toLowerCase().replace(/[a-z]/g, "");
  let answer = Number(str2);
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
