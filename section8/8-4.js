function solution(n) {
  let answer = [];
  // 포함시켰는데 안시켰는지 체크하는 배열 (1부터 n까지 길이는 n+1)
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v > n) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " "; // 체크배열에 체크되어 있는 애들의 인덱스만 넣어줌
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[v] = 1; // 들어갔다고 체크
      DFS(v + 1);
      ch[v] = 0; // 안들어갔다고 체크
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
