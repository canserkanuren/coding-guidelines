module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  env: { browser: true, node: true, jest: true },
  rules: {
    'prettier/prettier': 'error'
  }
};
