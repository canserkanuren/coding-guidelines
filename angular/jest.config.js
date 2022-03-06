/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts}',
    '!<rootDir>/src/**/*.d.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  coverageReporters: ['html', 'lcovonly', 'text-summary'],
  coveragePathIgnorePatterns: [
    // Module to exclude from coverage (because they're not testable)
  ],
  reporters: [
    'default',
    [
      'jest-stare',
      {
        resultDir: 'target/jest-stare',
        reportTitle: 'Coverage report',
        coverageLink: '../coverage/index.html',
        additionalResultsProcessor: ['jest-html-reporter'],
        jestStareConfigJson: 'jest-stare.json',
        jestGlobalConfigJson: 'globalStuff.json'
      }
    ]
  ],
  coverageDirectory: '<rootDir>/target/coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  })
};
