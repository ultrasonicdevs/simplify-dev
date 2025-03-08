import { Config } from 'tailwindcss';

import {
  CHECKBOX_BG,
  CHECKBOX_BORDER,
  CHECKBOX_HEIGHT,
  CHECKBOX_OUTLINE,
  CHECKBOX_STROKE,
  CHECKBOX_WIDTH,
} from './constants/checkbox';
import { COLORS } from './constants/colors';
import { InputFontSize, InputMargin } from './constants/input';
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
        ...COLORS,
        ...ToggleColors,
        ...ToggleColors,
      },
      backgroundColor: {
        ...CHECKBOX_BG,
      },
      stroke: {
        ...CHECKBOX_STROKE,
      },
      borderColor: {
        ...CHECKBOX_BORDER,
      },
      outlineColor: {
        ...CHECKBOX_OUTLINE,
      },
      fontFamily: {
        serif: '"Inter", sans-serif',
      },
      width: { ...CHECKBOX_WIDTH, ...ToggleWidth },
      height: { ...CHECKBOX_HEIGHT, ...ToggleHeight },
      margin: { ...InputMargin, ...ToggleMargin },
    },
  },
};
