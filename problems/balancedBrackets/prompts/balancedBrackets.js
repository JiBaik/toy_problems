/*
  Prompts: Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

  O: Boolean
  I: String
  C: None
  E:
  // "(x + y) - (4)" => true
  // "(x + y) - (4)" => true
  // "(((10 ) ()) ((?)(:)))" => true
  // "[{()}]" => true
  // "(50)(" => false
  // "[{]}" => false

*/

const balancedBrackets = (str) => {
  let starter = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  let closer = {
    "}": true,
    "]": true,
    ")": true
  };

  let stack = [];

  for (var i = 0; i < str.length; i++) {
    if (starter[str[i]]) {
      stack.push(str[i]);
    } else if (closer[str[i]]) {
      if (starter[stack.pop()] !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = { balancedBrackets };
