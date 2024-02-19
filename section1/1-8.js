function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      answer = [...arr];
      answer.splice(i, 1);
      answer.splice(j, 1);
      if (answer.reduce((acc, v) => acc + v) === 100) return answer;
    }
  }
  return;
}

let arr1 = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr1));

let arr2 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr2));
