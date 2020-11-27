'use strict'

module.exports = {
    '@typescript-eslint/naming-convention': [
        'error', {
            selector: 'default',
            format: ['camelCase'],
        }, {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        }, {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
        }, {
            selector: 'typeLike',
            format: ['PascalCase'],
        }, {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
        }, {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
        }, {
            selector: 'parameterProperty',
            format: ['camelCase', 'PascalCase'],
        }, {
            selector: 'property',
            format: ['camelCase', 'PascalCase'],
        },
    ],
}
