function solution(n, f) {
  let answer;
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let dy = Array.from(Array(n), () => Array(n).fill(0));
  let combiTmp = Array.from({ length: n }, () => 0);
  let ch = Array.from({ length: n }, () => false);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n - r === 0 || r === 0) return 1;
    else {
      return combi(n - 1, r - 1) + combi(n - 1, r);
    }
  }
  for (let i = 0; i < n; i++) {
    combiTmp[i] = combi(n - 1, i);
  }

  let tmp = Array.from({ length: n }, () => 0);
  let flag = false;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (sum === f) {
        answer = [...tmp];
        flag = true;
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (!ch[i]) {
          ch[i] = true;
          tmp[L] = arr[i];
          DFS(L + 1, sum + arr[i] * combiTmp[L]);
          ch[i] = false;
        }
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
