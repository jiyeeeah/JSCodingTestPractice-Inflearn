function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[idx], arr[i]] = [arr[i], arr[idx]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
