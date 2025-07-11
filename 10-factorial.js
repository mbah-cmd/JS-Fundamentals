function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n < 0) {
    return NaN;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
    if (!isFinite(result)) {
      return Infinity;
    }
  }
  return result;
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));
