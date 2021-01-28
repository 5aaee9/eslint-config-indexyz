'use strict'

const rules = require('./typescript')

rules.parser = 'vue-eslint-parser'
rules.parserOptions.parser = '@typescript-eslint/parser'
rules.extends = [ ...ts.extends, 'plugin:vue/recommended' ]
rules.plugins = [ ...ts.plugins, 'vue' ]
rules.rules = {
    ...ts.rules,
    ...require('./rules/vue'),
}

module.exports = rules
