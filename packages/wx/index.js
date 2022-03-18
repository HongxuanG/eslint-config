module.exports = {
  extends: ['@aaronghx/eslint-config-ts'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    my: true,
    swan: true,
    getApp: true,
    getCurrentPages: true,
    requirePlugin: true,
    requireMiniProgram: true,
  },
  rules: {
    'no-debugger': 2,
    'no-unused-vars': 2,
    'no-var': 0,
    'no-param-reassign': 0,
    'no-irregular-whitespace': 0,
    'no-useless-catch': 1,
    'max-params': ['error', 4],
    'array-callback-return': 1,
    'eqeqeq': 0,
    'indent': ['error', 2, { SwitchCase: 1 }],
  },
  // ts 规则单独覆盖
  overrides: [
    {
      files: ['*.wxs'],
      globals: {
        getDate: true,
        getRegExp: true,
      },
      extends: [
        'plugin:es5/no-es2015',
      ],
      plugins: ['es5'],
      rules: {
        'object-shorthand': ['error', 'never'],
        'prefer-template': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ],
}
