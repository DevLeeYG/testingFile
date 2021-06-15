function sumTo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if (num <= 0) {
    return 0;
  } else {
    return num + sumTo(num - 1);
  }
}

console.log(sumTo(5));
// sumTo(1) => return 1
// sumTo(2) => return sumTo(1) + sumTo(num - 1);
// sumTo(3) => return
// sumTo(4)
// sumTo(5)
