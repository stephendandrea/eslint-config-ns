module.exports = {
  extends: [
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb',
    'airbnb/hooks',
    // https://www.npmjs.com/package/eslint-plugin-jest
    'plugin:jest/recommended',
    'plugin:jest/style',
    // https://www.npmjs.com/package/eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended',
    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/errors',
    'plugin:import/warnings',
    // https://www.npmjs.com/package/eslint-plugin-react
    'plugin:react/recommended',
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
    /**
     * Make sure to put prettier last, so it gets the chance to override other
     * configs.
     *
     * @see https://github.com/prettier/eslint-config-prettier
     *
     * prettier alternative: https://github.com/prettier/prettier-eslint
     */
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    /**
     * You can disable button-has-type,
     * if you use only "submit" button.
     */
     'react/button-has-type': 0,
     'react/no-array-index-key': 0,
     'jsx-a11y/no-noninteractive-element-interactions': 0,
     'jsx-a11y/click-events-have-key-events': 0,
     'jsx-a11y/no-static-element-interactions': 0,
     'no-use-before-define': 0,
     'jsx-a11y/no-autofocus': 0,
     'react/sort-comp': 0,
     'react/prefer-stateless-function': 0,
     'jsx-a11y/anchor-is-valid': [
       'error',
       {
         components: ['Link'],
         specialLink: ['to']
       }
     ],
     'jsx-a11y/label-has-for': [
       2,
       {
         required: {
           some: ['nesting', 'id']
         }
       }
     ],
     'no-underscore-dangle': 0,
     'no-debugger': 0,
     'no-console': ['warn', { allow: ['warn', 'error'] }],
     'import/no-named-as-default': 0,
     'import/prefer-default-export': 0,
     'object-shorthand': 0,
     'react/forbid-prop-types': 0,
     'class-methods-use-this': 0,
     'no-param-reassign': [
       2,
       {
         props: false
       }
     ],
     'react/jsx-filename-extension': 0,
     /**
      * The next rule allows the use of passing props
      * using the spread operator {...props}
      * If enable, you need to pass explicit props
      * prop1={prop1} prop2={prop2}
      */
     'react/jsx-props-no-spreading': 0,
     'react/prop-types': 0,
     'import/no-extraneous-dependencies': 0,
     'import/extensions': [
       'error',
       'always',
       {
         js: 'never',
         jsx: 'never',
         ts: 'never',
         tsx: 'never'
       }
     ],
     'prettier/prettier': [
       'error',
       {
         singleQuote: true
       }
     ],
 
     'no-unused-vars': 1,
     '@typescript-eslint/no-unused-vars': 1,
     'import/no-named-as-default': 0,
     'import/no-named-as-default-member': 0,
     'import/no-named-default': 0,
     'no-self-compare': 0,
     'no-new': 0,
     'jsx-a11y/label-has-for': 0,
     'no-shadow': 0,
     'no-case-declarations': 0,
     camelcase: 0,
    // general ESLint rules
    'class-methods-use-this': 0,
    'no-case-declarations': 0,
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-plusplus': 0,
    'no-underscore-dangle': 0, // e.g. __DEV__
    'no-unused-expressions': [
      2,
      {
        // allow short circuit evaluations in your expressions
        allowShortCircuit: true,
      },
    ],
    'sort-imports': 'off',
    'sort-keys': 0,

    // rules for https://github.com/benmosher/eslint-plugin-import
    'import/extensions': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
    'import/prefer-default-export': 0,

    // rules for https://www.npmjs.com/package/eslint-plugin-jest
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // https://www.npmjs.com/package/eslint-plugin-react
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'never', children: 'never' },
    ],
    // jsx is also allowed in non .jsx files
    'react/jsx-filename-extension': 0,
    // Allowed but we should be aware to not overuse this.
    'react/jsx-props-no-spreading': 0,
    // use "" when passing a string as a property
    'react/sort-comp': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React
      // to use
      version: 'detect',
    },
  },
}
