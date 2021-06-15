function factorial(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(10));

// factorial(1) => return 1
// factorial(2) => 2 * factorial(1);
// factorial(3) => 3 * factorial(2);
