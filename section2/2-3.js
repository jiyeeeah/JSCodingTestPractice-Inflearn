function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push("D"); //비긴 경우
    else if (a[i] === 1) {
      if (b[i] === 2) answer.push("B"); // B가 이김
      if (b[i] === 3) answer.push("A"); // A가 이김
    } else if (a[i] === 2) {
      if (b[i] === 1) answer.push("A"); // A가 이김
      if (b[i] === 3) answer.push("B"); // B가 이김
    } else if (a[i] === 3) {
      if (b[i] === 1) answer.push("B"); // B가 이김
      if (b[i] === 2) answer.push("A"); // A가 이김
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
