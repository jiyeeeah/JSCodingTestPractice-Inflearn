function solution(s, e) {
  let answer = 0;
  let move = [1, -1, 5];
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let m of move) {
      if (x + m === e) return dis[x] + 1;
      if (x + m > 0 && x + m <= 10000 && dis[x + m] === 0) {
        dis[x + m] = dis[x] + 1;
        queue.push(x + m);
      }
    }
  }

  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
