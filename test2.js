function isOdd(num) {
  const target = Math.abs(num); // 77

  if (target === 0) {
    return false;
  }

  if (target === -1) {
    return true;
  }

  return isOdd(target - 2);
}

console.log(isOdd(77));

// isOdd(0) return 0;
// isOdd(2) => return isOdd(num - 2);
// isOdd(4) => return isOdd(num - 2);
