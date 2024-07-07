import getConfig from '@functorfactory/eslint-config';

const config = getConfig({
  parserOptions: {
    project: './tsconfig.test.json',
  },
});

export default [
  ...config,
  {
    rules: {
      'functional/no-expression-statements': 'off',
      'functional/no-return-void': 'off',
      'functional/functional-parameters': 'off',
      'functional/prefer-immutable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
];
