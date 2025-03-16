module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es5: true,
    es6: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    es2019: true,
    es2020: true,
    es2021: true,
    es2022: true,
    es2023: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-tabs': 'off',
    'semi': 'off',
    'no-useless-escape': 'off',
    'no-control-regex': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    'linebreak-style': [1, 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
