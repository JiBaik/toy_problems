/*
  Prompt: Solve the Fibonacci sequence iteratively given an n amount of runs

  Ex. iFib(5) => should return 5 because:
                0 1 1 2 3 5
*/

const iFib = (n) => {
  let fibs = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibs.push((fibs[i - 1] + fibs[i - 2]));
  }
  return fibs[n];
}

module.exports = { iFib };
