function solution(s, e) {
  let answer = 0;
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && dis[nx] === 0) {
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
