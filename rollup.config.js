import commonjs from '@rollup/plugin-commonjs';
// import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
// import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' assert { type: 'json' };

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
      typescript({ 
        tsconfig: 'tsconfig.prod.json',
        declaration: true,
        declarationDir: 'types'
      }),
      del({ targets: 'dist' }),
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
        file: 'dist/hooks/index.cjs',
        format: 'cjs'
        // plugins: [terser()]
      },
      {
        file: 'dist/hooks/index.js',
        format: 'esm'
        // plugins: [terser()]
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
        file: 'dist/utils/index.js',
        format: 'esm'
        // plugins: [terser()]
      },
      {
        file: 'dist/utils/index.cjs',
        format: 'cjs'
        // plugins: [terser()]
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
