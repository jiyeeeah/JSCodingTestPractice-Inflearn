function solution(arr) {
  let answer = [];
  let tmp = [...arr];
  for (let i = 0; i < tmp.length - 1; i++) {
    for (let j = 0; j < tmp.length - i - 1; j++) {
      if (tmp[j] > tmp[j + 1]) [tmp[j], tmp[j + 1]] = [tmp[j + 1], tmp[j]];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== tmp[i]) answer.push(i + 1);
  }
  return answer;
}

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr1));

let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr2));
