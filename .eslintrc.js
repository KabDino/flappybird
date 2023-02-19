const imports = [
  'assets',
  'components',
  'constants',
  'hooks',
  'modals',
  'modules',
  'nav',
  'screens',
  'store',
  'utils',
];

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'import',
    '@typescript-eslint',
    'sonarjs',
    'sort-destructure-keys',
    'typescript-sort-keys',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  ignorePatterns: ['/assets/icomoon/*'],
  rules: {
    // NO everything
    'no-shadow': 0,
    'no-console': 0,
    'no-sequences': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-new-wrappers': 2,
    'no-with': 2,
    'no-var': 2,

    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    //Sonar
    'sonarjs/no-small-switch': 2,
    'sonarjs/prefer-single-boolean-return': 2,
    'sonarjs/no-same-line-conditional': 1,
    'sonarjs/cognitive-complexity': 0,
    'sonarjs/no-duplicate-string': 1,
    'sonarjs/no-collapsible-if': 1,
    'sonarjs/no-extra-arguments': 1,
    'sonarjs/no-identical-functions': 1,
    'sonarjs/no-duplicated-branches': 1,
    'sonarjs/no-redundant-jump': 1,

    // React
    'react/jsx-no-literals': 1,
    'react/no-access-state-in-setstate': 2,
    'react/no-array-index-key': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/jsx-no-bind': 1,
    'react/prop-types': 0,
    // 'react/require-default-props': 1,
    'react/require-default-props': 0,
    'react/jsx-boolean-value': 2,
    'react-native/no-raw-text': 1,
    'prefer-const': [
      1,
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreStyleProperties: true,
      },
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          '/^handle.+$/',
          '/^render.+$/',
          'render',
        ],
      },
    ],

    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: {
          minProperties: 1,
          multiline: true,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
        },
        ExportDeclaration: {
          multiline: true,
        },
      },
    ],

    /* typescript-eslint */
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/no-unused-vars': 1,

    /* react-hooks */
    'react-hooks/exhaustive-deps': [
      2,
      {
        additionalHooks:
          'useAnimatedStyle|useCode|useDerivedValue|useIgnoreFirstRender',
      },
    ],

    /* import */
    'import/default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: 'react-native',
            group: 'builtin',
          },
          ...imports.map(dir => ({
            pattern: dir,
            group: 'internal',
          })),
          ...imports.map(dir => ({
            pattern: dir + '/**',
            group: 'internal',
          })),
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/imports-first': [2, 'absolute-first'],
    'prettier/prettier': [
      1,
      {
        arrowParens: 'avoid',
      },
    ],
  },
};
