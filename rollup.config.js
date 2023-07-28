import packageJson from './package.json' assert { type: 'json' }
import external from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import postcssImport from 'postcss-import'
import babel from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import tailwindcss from 'tailwindcss'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({ tsconfig: 'tsconfig.prod.json' }),
      postcss({
        plugins: [postcssImport(), tailwindcss()],
        extensions: ['.css'],
        minimize: true,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      commonjs(),
      external(),
      resolve(),
      image(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/, 'react', 'react-dom'],
    plugins: [dts()],
  },
]
