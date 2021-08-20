module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  testRegex: '\\.spec\\.ts',
  setupFiles: ['<rootDir>/tests/setup.ts'],
};
