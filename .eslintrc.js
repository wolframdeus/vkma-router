module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  rules: {
    'max-len': ['error', 80, {
      ignorePattern: '^import|^export| \* @type'
    }],
    'react/display-name': 0,
    'react/prop-types': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  },
  settings: {
    react: {
      version: '16.13.1',
    }
  }
};
