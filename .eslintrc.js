module.exports = {
  root: true,
  extends: ['standard', 'plugin:vue/essential'],
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['vue'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-var': 'error',
    'prefer-const': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'no-alert': 'error',
    'max-len': ['warn', { code: 120 }],
    'no-mixed-operators': 'error',
    indent: ['error', 2],
    eqeqeq: 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-plusplus': 'off',
    'constructor-super': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'error',
    'no-param-reassign': 'off',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: false,
        ignoreWhenEmpty: true
      }
    ]
  }
};
