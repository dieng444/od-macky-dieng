module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    'class-methods-use-this': 'off',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'max-lines-per-function': ['error', { skipBlankLines: true, skipComments: true, IIFEs: true }],
    complexity: ['error', { max: 10 }],
    'no-multi-spaces': ['error'],
    'explicit-function-return-type': 'off',
  },
};
