import { Config } from 'tailwindcss';

import { InputMargin } from './constants/input';
import {
  ToggleColors,
  ToggleHeight,
  ToggleMargin,
  ToggleWidth,
} from './constants/toggle';

export const simplifyUtilitiesPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        ...ToggleColors,
        ...ToggleColors,
      },
      fontFamily: {
        serif: '"Inter", sans-serif',
      },
      width: { ...ToggleWidth },
      height: { ...ToggleHeight },
      margin: { ...InputMargin, ...ToggleMargin },
    },
  },
};
