import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' with { type: 'json' };

export default [
  // root && ui
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }), // Очистка папки `dist` перед сборкой
      typescript({
        tsconfig: './tsconfig.prod.json',
        compilerOptions: {
          "declaration": true,
          "declarationDir": "./dist/types",
        }
      }),
      commonjs(),
      external(),
      resolve()
    ],
    external: ['react', 'react-dom', '@hooks/**', '@utils/**', '*.stories.*', '*.mdx']
  },
  // hooks
  {
    input: 'src/hooks/index.ts',
    output: [
      {
        file: packageJson.exports['./hooks'].default,
        format: 'cjs'
      },
      {
        file: packageJson.exports['./hooks'].import,
        format: 'esm'
      }
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
      }),
      commonjs(),
      external(),
      resolve()
    ],
    external: ['react', 'react-dom']
  },

  // utils
  {
    input: 'src/utils/index.ts',
    output: [
      {
        file: packageJson.exports['./utils'].default,
        format: 'cjs'
      },
      {
        file: packageJson.exports['./utils'].import,
        format: 'esm'
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.prod.json',
      }),
      commonjs(),
      external(),
      resolve()
    ],
    external: ['react', 'react-dom', 'tailwindcss']
  },
  // ui types
  {
    input: 'dist/types/ui/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: ['react', 'react-dom'],
    plugins: [dts()]
  },
  // hooks types
  {
    input: 'dist/types/hooks/index.d.ts',
    output: [{ file: 'dist/hooks/index.d.ts', format: 'esm' }],
    external: ['react', 'react-dom'],
    plugins: [dts()]
  },
  // utils types
  {
    input: 'dist/types/utils/index.d.ts',
    output: [{ file: 'dist/utils/index.d.ts', format: 'esm' }],
    external: ['react', 'react-dom'],
    plugins: [dts(), del({ hook: "buildEnd", targets: 'dist/types' })]
  }
];
