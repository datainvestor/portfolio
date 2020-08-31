module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: 'vuetify',
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    "space-before-blocks": "off",
    "quotes": "off",
    "no-extra-semi": "off",
    "indent": "off",
    "semi": "off",
    "comma-dangle": "off",
    "spaced-comment": "off",
    "space-before-function-paren": "off",
    "no-trailing-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-template-curly-in-string": "off",
    "no-prototype-builtins": "off",
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'html-indent': "off",
    'vue/max-attributes-per-line': "off",
    'vue/singleline-html-element-content-newline': "off",
    'vue/max-attributes-per-line': "off",
    'vue/html-self-closing': "off",
    "vue/script-indent": "off"
  }
}
