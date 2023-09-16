import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const viteTsconfig = require('vite-tsconfig-paths');
const tsconfigPaths = viteTsconfig.default;

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss')
        }
      }
    },
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true
    }
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()]
    });
  }
};
export default config;
