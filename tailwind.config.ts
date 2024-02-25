import type { Config } from 'tailwindcss';
import { simplifyDefaultsPlugin, simplifyUtilitiesPreset } from './src/utils';

export default {
  content: ['./src/**/*', './stories/**/*', './.storybook/**/*'],
  theme: {
    extend: {}
  },
  plugins: [simplifyDefaultsPlugin],
  presets: [simplifyUtilitiesPreset]
} satisfies Config;
