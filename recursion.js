const fib = (n) => {
  //takes initial value and where to stop the iteration
  // we need to have a base condition
  // i need to set the intial values, that is the value of the fibonnaci value needed
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

const answer = fib(6);
console.log(answer)

