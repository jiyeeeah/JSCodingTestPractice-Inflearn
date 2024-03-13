function solution(arr) {
  let answer = false;
  let ch = Array.from({ length: arr.length }, () => false);
  function DFS(v) {
    if (v >= arr.length) {
      let subset1 = [];
      let subset2 = [];
      for (let i = 0; i < arr.length; i++) {
        if (ch[i]) subset1.push(arr[i]);
        else subset2.push(arr[i]);
      }
      let sum1 = subset1.length && subset1.reduce((a, b) => a + b);
      let sum2 = subset2.length && subset2.reduce((a, b) => a + b);
      if (sum1 === sum2) answer = true;
    } else {
      ch[v] = true;
      DFS(v + 1);
      ch[v] = false;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
