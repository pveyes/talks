const { matcherHint, printExpected, printReceived } = require('jest-matcher-utils');

function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

const passMessage = (actual, expected) => () => `${matcherHint('.not.toBeAnagramOf')}

Expected value to not be anagram of:
  ${printExpected(expected)}
Received:
  ${printReceived(actual)}
`;

const failMessage = (actual, expected) => () => `${matcherHint('.toBeAnagramOf')}

Expected value to be anagram of:
  ${printExpected(expected)}
Received:
  ${printReceived(actual)}
`;

expect.extend({
  toBeAnagramOf: (actual, expected) => {
    const pass = isAnagram(actual, expected);
    return {
      pass,
      message: pass ? passMessage(actual, expected) : failMessage(actual, expected)
    };
  },
});

const toRandomAnagram = require('../toRandomAnagram');

test('anagram of kuda', () => {
  const rand = toRandomAnagram('kuda');
  expect(rand).toBeAnagramOf('kuda');
});
