'use strict'

const typescriptESLintBuiltinRules = require('@typescript-eslint/eslint-plugin/dist/rules')

const ESLINT_BASE_RULES_TO_BE_OVERRIDDEN = new Map(
    Object.entries(typescriptESLintBuiltinRules.default)
        .filter(([, rule]) => rule.meta.docs && rule.meta.docs.extendsBaseRule)
        .map(([ruleName, rule]) => [
            ruleName,
            typeof rule.meta.docs.extendsBaseRule === 'string'
                ? rule.meta.docs.extendsBaseRule
                : ruleName,
        ]),
);
const RULE_NAME_PREFIX = '@typescript-eslint/';

function overrideTypescriptRule(k, v) {
    if (ESLINT_BASE_RULES_TO_BE_OVERRIDDEN.has(k)) {
        return {
            [k]: 'off',
            [`${RULE_NAME_PREFIX}${k}`]: v,
        }
    }

    return {
        [k]: v,
    }
}

function editRules(rules) {
    return Object.entries(rules)
        .map(([k, v]) => overrideTypescriptRule(k, v))
        .reduce((pre, cur) => Object.assign(pre, cur), {})
}


module.exports = {
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        ...editRules(require('./rules/base')),
        ...require('./rules/typescript'),
    },
}
