/** @type {import('jest').Config} */
const config = {
  verbose: true,
  coverageThreshold: {
    './samples/fn.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}

module.exports = config