// jest.config.mjs

export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // setupTests.js 파일을 사용
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js?(x)'],
};