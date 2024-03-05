function solution(s) {
  let answer = [];
  let p = 0;
  let letter = s[0];
  for (let x of s) {
    if (x === letter) {
      p++;
      answer.pop();
    } else {
      if (p != 1) {
        answer.push(p);
      }
      letter = x;
      p = 1;
    }
    answer.push(letter);
  }
  return answer.join("");
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
