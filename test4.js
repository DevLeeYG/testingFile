function fibonacci(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  let fiboArr = Array(num);
  fiboArr[0] = 0;

  function fiboMaker(index) {
    if (index < num) return;
    if (index === 0) {
      fiboArr.push(1);
      return fiboArr.push(fiboArr[index] + fiboArr[index - 1]);
    }

    fiboArr.push(fiboArr[index] + fiboArr[index - 1]);

    return fiboMaker(index - 1);
  }

  fiboMaker(0);

  return fiboArr;
}

console.log(fibonacci(9));

// 우선 피보나치 수열을 만들어야 한다.
// fiboMaker(10) => return;
// fiboMaker(9) => fiboArr.push(fiboArr[index - 1] + fiboArr[index - 2]); return fiboMaker(index + 1)
