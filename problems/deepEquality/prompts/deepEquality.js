/*
  Prompt: Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

  O: Boolean
  I: 2 objects
  C: none
*/

const deepEquality = ((a, b) => {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  for (let key in a) {
    if (!deepEquality(a[key], b[key])) {
      return false;
    }
  }

  return true;
});

module.exports = { deepEquality };
