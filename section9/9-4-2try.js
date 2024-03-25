function solution(board) {
  let answer = 0;
  let goal = board.length - 1;
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  function DFS(x, y) {
    board[x][y] = -1;
    if (x === goal && y === goal) answer++;
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length && board[nx][ny] === 0) {
          board[nx][ny] = -1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
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
