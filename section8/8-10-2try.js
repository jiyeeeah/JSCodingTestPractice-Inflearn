function solution(m, arr) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let ch = Array.from({ length: arr.length }, () => false);
  function DFS(L) {
    if (L === 2) {
      answer.push([...tmp]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!ch[i]) {
          tmp[L] = arr[i];
          ch[i] = true;
          DFS(L + 1);
          ch[i] = false;
        }
      }
    }
  }
  DFS(0);
  answer.push(answer.length);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
