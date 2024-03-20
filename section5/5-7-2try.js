function solution(str1, str2) {
  let answer = true;
  let sH1 = new Map();
  let sH2 = new Map();
  for (let x1 of str1) {
    if (sH1.has(x1)) sH1.set(x1, sH1.get(x1) + 1);
    else sH1.set(x1, 1);
  }
  for (let x2 of str2) {
    if (sH2.has(x2)) sH2.set(x2, sH2.get(x2) + 1);
    else sH2.set(x2, 1);
  }
  for (let [key, val] of sH1) {
    if (!sH2.has(key) || val !== sH2.get(key)) answer = false;
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));

let c = "aCCba";
let d = "Caaab";
console.log(solution(c, d));
