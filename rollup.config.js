import packageJson from './package.json' assert { type: 'json' };
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
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
    external: ['react', 'react-dom']
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: ['react', 'react-dom'],
    plugins: [dts(), del({ targets:'dist/types', hook: 'buildEnd'})]
  }
];
