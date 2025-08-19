function solution(s, e) {
  const move = [-1, 1, 5];

  const queue = [[s, 0]];

  while (queue.length > 0) {
    const [pos, count] = queue.shift();
    if (pos === e) return count;
    for (let i = 0; i < 3; i++) {
      const nextPos = pos + move[i];
      queue.push([nextPos, count + 1]);
    }
  }

  return -1;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
