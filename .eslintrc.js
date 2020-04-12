module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": 'babel-eslint',
    "sourceType": "module",
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": false,
      "jsx": false
    }
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier',
    'gridsome'
  ],
  // add your custom rules here
  rules: {
    "gridsome/format-query-block": "error"
  },
  ignorePatterns:[
    "service-worker.js"
      ]
}
