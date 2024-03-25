function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n }, () => false);
  function DFS(L) {
    if (L > n) {
      let tmp = "";
      for (let i = 0; i < ch.length; i++) {
        if (ch[i]) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp);
    } else {
      ch[L] = true;
      DFS(L + 1);
      ch[L] = false;
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
