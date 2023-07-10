module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-mutating-props': 'off'
  }
}
