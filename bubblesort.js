const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let checked = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        checked++;
      }
    }
    if (checked === 0) break;
  }
  return arr;
};
console.log(bubbleSort([5, 4, 3, 2, 1]));

// 버블소트 란 거품이 밀려 올라가는것과 같은 모습이랑 비슷하다고해서 버블소트라고 불린다

// 앞자리와 뒷자리를 비교해서 큰것을 뒤로 밀리는 형태로 알고리즘이 작성이된다

// 불필요한 순회를 막기위해 체크라는 변수로 더이상 할필요없을때 브레이크를 걸었다
