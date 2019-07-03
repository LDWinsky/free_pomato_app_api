module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    root: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: ["error", "never"],
  },
};
