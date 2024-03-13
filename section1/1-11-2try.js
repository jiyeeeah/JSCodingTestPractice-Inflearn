function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
