export default {
  bracketSameLine: true,
  parser: 'typescript',
  printWidth: 100,
  endOfLine: 'lf',
  trailingComma: 'none',
  tabWidth: 2,
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-organize-imports'],
  importOrder: [
    '^@/ui/(.*)$',
    '^@/hooks/(.*)$',
    '^@/utils/(.*)$',
    '^@/lib/(.*)$',
    '^@/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  organizeImportsSkipDestructiveCodeActions: false
};
