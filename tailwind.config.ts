import { tailwindSimplifyPlugin, tailwindSimplifyPreset } from './src/utils';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*', './stories/**/*', './.storybook/**/*'],
  theme: {
    extend: {}
  },
  plugins: [tailwindSimplifyPlugin],
  presets: [tailwindSimplifyPreset]
} satisfies Config;
