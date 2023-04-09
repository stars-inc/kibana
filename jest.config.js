/** @type {import('jest').Config} */
const config = {
  verbose: true,
  coverageThreshold: {
    // 100% coverage is required
    './samples/fn.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}

module.exports = config