/* eslint-disable import/no-anonymous-default-export */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
const customJestConfig = {
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
  setupFilesAfterEnv: ['./src/mock/setup.ts'],
}
module.exports = createJestConfig(customJestConfig)
