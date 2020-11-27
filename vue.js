'use strict'

const ts = require('./typescript')

ts.extends = [ ...ts.extends, 'plugin:vue/recommended' ]
ts.plugins = [ ...ts.plugins, 'vue' ]
ts.rules = {
    ...ts.rules,
    ...require('./rules/vue'),
}

module.exports = ts
