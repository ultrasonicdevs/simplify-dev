import generatePackageJson from 'rollup-plugin-generate-package-json';
import packageJson from './package.json' assert { type: 'json' };
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

export default [
  // root && ui
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm'
        // plugins: [terser()]
      },
      {
        file: packageJson.main,
        format: 'cjs'
        // plugins: [terser()]
      }
    ],
    plugins: [
      typescript({ tsconfig: 'tsconfig.prod.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      commonjs(),
      external(),
      resolve(),
      image(),
      del({ targets: 'dist/*' })
    ],
    external: ['react', 'react-dom', './hooks', './utils', '*.css']
  },

  // hooks
  {
    input: 'src/hooks/index.ts',
    output: [
      {
        file: 'dist/hooks/index.cjs',
        format: 'cjs',
        plugins: [terser()]
      },
      {
        file: 'dist/hooks/index.js',
        format: 'esm',
        plugins: [terser()]
      }
    ],
    plugins: [
      generatePackageJson({
        baseContents: {
          main: './index.cjs',
          module: './index.js',
          types: './index.d.ts',
          files: ['./']
        }
      }),
      typescript({ tsconfig: 'tsconfig.prod.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      commonjs(),
      external(),
      resolve(),
      image()
    ],
    external: ['react', 'react-dom', '*.css']
  },
  // client
  {
    input: 'src/ui/client/index.ts',
    output: [
      {
        file: 'dist/client-ui/index.cjs',
        format: 'cjs',
        plugins: [terser()]
      },
      {
        file: 'dist/client-ui/index.js',
        format: 'esm',
        plugins: [terser()]
      }
    ],
    plugins: [
      generatePackageJson({
        baseContents: {
          main: './index.cjs',
          module: './index.js',
          types: './index.d.ts',
          files: ['./']
        }
      }),
      typescript({ tsconfig: 'tsconfig.prod.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      commonjs(),
      external(),
      resolve(),
      image()
    ],
    external: ['react', 'react-dom', '*.css']
  },

  // utils
  {
    input: 'src/utils/index.ts',
    output: [
      {
        file: 'dist/utils/index.cjs',
        format: 'cjs',
        plugins: [terser()]
      }
    ],
    plugins: [
      generatePackageJson({
        baseContents: {
          main: './index.cjs',
          module: './index.js',
          types: './index.d.ts',
          files: ['./']
        }
      }),
      typescript({
        tsconfig: 'tsconfig.prod.json'
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      commonjs(),
      external(),
      resolve(),
      image()
    ],
    external: ['react', 'react-dom', '*.css']
  },
  {
    input: 'src/utils/index.ts',
    output: [
      {
        file: 'dist/utils/index.js',
        format: 'esm',
        plugins: [terser()]
      }
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
        compilerOptions: {
          declaration: true,
          declarationDir: 'types'
        }
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      commonjs(),
      external(),
      resolve(),
      image()
    ],
    external: ['react', 'react-dom', '*.css']
  },
  //types
  {
    input: 'dist/utils/types/hooks/index.d.ts',
    output: [{ file: 'dist/hooks/index.d.ts', format: 'esm' }],
    external: ['react', 'react-dom', '*.css'],
    plugins: [dts()]
  },
  {
    input: 'dist/utils/types/ui/client/index.d.ts',
    output: [{ file: 'dist/client-ui/index.d.ts', format: 'esm' }],
    external: ['react', 'react-dom', '*.css'],
    plugins: [dts()]
  },
  {
    input: 'dist/utils/types/utils/index.d.ts',
    output: [{ file: 'dist/utils/index.d.ts', format: 'esm' }],
    external: ['react', 'react-dom', '*.css'],
    plugins: [dts()]
  },
  {
    input: 'dist/utils/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: ['react', 'react-dom', './hooks', './utils', '*.css'],
    plugins: [dts(), del({ targets: 'dist/utils/types', hook: 'buildEnd' })]
  }
];
