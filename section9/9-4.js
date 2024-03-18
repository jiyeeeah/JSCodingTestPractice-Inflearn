function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];
  function DFS(x, y) {
    if (x === n - 1 && y === n - 1) answer++;
    else {
      for (let i = 0; i < 4; i++) {
        if (x + dx[i] >= 0 && x + dx[i] < n && y + dy[i] >= 0 && y + dy[i] < n) {
          if (board[x + dx[i]][y + dy[i]] === 0) {
            board[x + dx[i]][y + dy[i]] = -1;
            DFS(x + dx[i], y + dy[i]);
            board[x + dx[i]][y + dy[i]] = 0;
          }
        }
      }
    }
  }
  board[0][0] = -1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
