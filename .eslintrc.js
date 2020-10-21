module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  env: { browser: true, node: true, jest: true },
  rules: {
    'prettier/prettier': 'error'
  }
};
