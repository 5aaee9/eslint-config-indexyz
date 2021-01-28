'use strict'

const rules = require('./typescript')

rules.parser = 'vue-eslint-parser'
rules.parserOptions.parser = '@typescript-eslint/parser'
rules.extends = [ ...rules.extends, 'plugin:vue/recommended' ]
rules.plugins = [ ...rules.plugins, 'vue' ]
rules.rules = {
    ...rules.rules,
    ...require('./rules/vue'),
}

module.exports = rules
