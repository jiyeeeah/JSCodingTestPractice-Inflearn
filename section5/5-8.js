function compareStr(target, str) {
  let targetH = new Map();
  for (let x of target) {
    if (targetH.has(x)) targetH.set(x, targetH.get(x) + 1);
    else targetH.set(x, 1);
  }
  for (let x of str) {
    if (!targetH.has(x) || targetH.get(x) === 0) return false;
    targetH.set(x, targetH.get(x) - 1);
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let n = t.length;
  for (let i = 0; i <= s.length - n; i++) {
    let slicedStr = s.slice(i, i + n);
    if (compareStr(t, slicedStr)) answer++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
