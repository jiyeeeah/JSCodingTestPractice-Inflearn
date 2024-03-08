function solution(str1, str2) {
  let answer = true;
  let sH = new Map();
  for (let letter of str1) {
    if (sH.has(letter)) sH.set(letter, sH.get(letter) + 1);
    else sH.set(letter, 1);
  }
  for (let letter of str2) {
    if (!sH.has(letter) || sH.get(letter) === 0) return false;
    sH.set(letter, sH.get(letter) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));

let c = "aCCba";
let d = "Caaab";
console.log(solution(c, d));
