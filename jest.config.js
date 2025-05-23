const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Mock next/font modules
    'next/font/google': require.resolve('./__mocks__/nextFontGoogleMock.js'),
    'geist/font/sans': require.resolve('./__mocks__/geistFontMock.js'),
    'geist/font/mono': require.resolve('./__mocks__/geistFontMock.js'),
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // transformIgnorePatterns removed as moduleNameMapper should handle geist fonts
}

module.exports = createJestConfig(customJestConfig)
