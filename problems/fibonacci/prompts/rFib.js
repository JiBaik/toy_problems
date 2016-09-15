/*
  Prompt: Solve the Fibonacci sequence recursively given an n amount of runs

  Ex. rFib(5) => should return 5 because:
                0 1 1 2 3 5
*/

const rFib = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }

  return rFib(n-1) + rFib(n-2);
}

module.exports = { rFib };