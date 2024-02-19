function solution(arr) {
  let answer = 0;
  let tmp = Array.from({ length: arr.length + 2 }, () => 0);
  for (let i = 0; i < arr.length + 2; i++) tmp[i] = Array.from({ length: arr.length + 2 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      tmp[i + 1][j + 1] = arr[i][j];
      let mount = arr[i][j];
      if (
        mount > tmp[i][j + 1] &&
        mount > tmp[i + 2][j + 1] &&
        mount > tmp[i + 1][j] &&
        mount > tmp[i + 1][j + 2]
      ) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
