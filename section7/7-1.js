function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    let tmp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = tmp;
    // [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
