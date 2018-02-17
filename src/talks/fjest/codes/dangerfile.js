const { fail } = require('danger');
const formatter = require('./ci-utils/formatter');
const getRelativePath = require('./helper/getRelativePath');

function parseTestResult() {
  try {
    const jestResult = require(`./jest-result.json`);
    return jestResult.testResults.map(test => {
      const relativePath = getRelativePath(test.name);
      return {
        name: relativePath,
        result: test.status === 'passed' ? 'pass' : 'fail',
        engine: 'jest',
        duration: (test.endTime - test.startTime) / 1000,
        path: relativePath,
        details: test.message,
      };
    });
  } catch (_) {
    // It's not a good idea to return empty array, but ¯\_(ツ)_/¯
    return [];
  }
};

const failedTests = parseTestResult().filter(t => t.result === 'fail');
if (failedTests.length > 0) {
  fail(`**${failedTests.length} failed test(s)**\n\n${formatter.formatTest(failedTests)}`);
}
