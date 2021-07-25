module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'jest'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    semi: [2, 'always', { omitLastInOneLineBlock: true }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: [
          'expect',
          'assertContentIsEqualTo',
          'expectStatutIsCorrectlyDisplayed',
          'assertContentIsHidden',
          'assertContentIsDisplayed'
        ]
      }
    ],
    'jest/no-test-prefixes': 'error',
    '@typescript-eslint/no-parameter-properties': 'off'
  }
};
