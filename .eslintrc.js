/**
* @file: description
* @author: huhao03
* @Date: 2021-09-07 11:09:00
* @LastEditors: huhao03
* @LastEditTime: 2021-09-07 11:27:39
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "@typescript-eslint/ban-ts-ignore": "off"
    "@typescript-eslint/ban-ts-comment": "off"
  }
}
