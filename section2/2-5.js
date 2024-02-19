function solution(arr) {
  let answer = [];
  let tmp = [...arr];
  let level = [];

  // 높은 점수부터 순서대로 level배열에 담음.
  while (tmp.length !== 0) {
    let max = Math.max(...tmp);
    level.push(...tmp.splice(tmp.indexOf(max), 1));
  }
  answer = arr.map((v, i) => {
    return level.indexOf(v) + 1;
  });

  return answer;
}

let arr1 = [87, 89, 92, 100, 76];
console.log(solution(arr1));

let arr2 = [87, 89, 92, 100, 100, 76];
console.log(solution(arr2));
