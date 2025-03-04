import globals from 'globals';

import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
  },
  jsxA11y.flatConfigs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  sonarjs.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['parameter', 'variable'],
          leadingUnderscore: 'require',
          format: ['camelCase'],
          modifiers: ['unused'],
        },
        {
          selector: ['parameter', 'variable'],
          leadingUnderscore: 'allowDouble',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    },
  },
  {
    ignores: [
      'coverage',
      'dist',
      'vite.config.ts',
      'vitest.config.ts',
      '**/*.stories.tsx',
    ],
  },
  eslintConfigPrettier,
];
