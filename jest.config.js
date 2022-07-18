module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/out/**",
    "!**/coverage/**",
    "!**/public/**",
    "!types/**",
    "!.eslintrc.js",
    "!jest.config.js",
    "!next.config.js",
    "!next-env.d.ts"
  ],
  testEnvironment: "jest-environment-jsdom"
}