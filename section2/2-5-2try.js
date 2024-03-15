function solution(arr) {
  let answer = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}

let arr1 = [87, 89, 92, 100, 76];
console.log(solution(arr1));

let arr2 = [87, 89, 92, 100, 100, 76];
console.log(solution(arr2));
