module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/__test__/config/jestConfig.ts'],
  collectCoverageFrom: [
    './src/components/',
    './src/store/',
    '!./src/components/**/style.ts'
  ]
}