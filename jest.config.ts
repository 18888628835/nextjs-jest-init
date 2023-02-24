/* eslint-disable import/no-anonymous-default-export */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+.svg$': '<rootDir>/src/mock/svg-transform.js',
    '^.+.(js|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
}
