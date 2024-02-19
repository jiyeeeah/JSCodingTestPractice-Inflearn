function solution(arr) {
  let answer = 0;
  let sumArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  sumArr.push(sum);

  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[arr.length - 1 - i][i];
  }
  sumArr.push(sum);

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    sumArr.push(sum);
  }

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[j][i];
    }
    sumArr.push(sum);
  }

  answer = Math.max(...sumArr);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
