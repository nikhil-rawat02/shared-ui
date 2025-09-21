import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

const prettierOptions = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  printWidth: 100,
  endOfLine: 'lf',
};

/** keeping typescript and javascript lint configuration separate */

export default [
  { ignores: ['dist', 'build', 'node_modules'] },
  {
    files: ['vite.config.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,

      // Prettier
      'prettier/prettier': ['warn', prettierOptions],
      // Code quality
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // CamelCase Variable names
      camelcase: ['error', { properties: 'always' }],
      // prevent variable declarations from shadowing variables declared in the outer scope.
      'no-shadow': 0,
      '@typescript-eslint/no-shadow': 2,
    },
  },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,

      // Prettier
      'prettier/prettier': ['warn', prettierOptions],
      // Code quality
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // CamelCase Variable names
      camelcase: ['error', { properties: 'always' }],
      // prevent variable declarations from shadowing variables declared in the outer scope.
      'no-shadow': 0,

      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
