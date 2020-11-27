'use strict'

module.exports = {
    extends: ['eslint:recommended', 'plugin:node/recommended'],
    env: {
        node: true,
        es6: true,
    },
    rules: {
        ...require('./rules/base.js'),
        'strict': 'warn',
        'handle-callback-err': 'off',
        'no-buffer-constructor': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'off',
        'no-process-exit': 'error',
        'no-restricted-modules': 'off',
        'no-sync': 'off',
        'no-mixed-operators': 'error',
    },
}
