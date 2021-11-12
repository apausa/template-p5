module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
  },
};
