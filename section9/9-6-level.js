function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => false);
  let queue = [];
  queue.push(s);
  ch[s] = true;

  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && !ch[nx]) {
          ch[nx] = true;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution(5, 14));
