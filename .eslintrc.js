module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  "parser": "@typescript-eslint/parser",
  "parser": "vue-eslint-parser",
  parserOptions: {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  ignores: {
    "vue/multi-word-component-names": ["error", {
      "ignores": [
        {
          "vue/multi-word-component-names": ["error", {
            "ignores": []
          }]
        },
        {
          "vue/multi-word-component-names": ["error", {
            "ignores": []
          }]
        }
      ]
    }]
  }
}
