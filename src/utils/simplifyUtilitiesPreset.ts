import { Config } from 'tailwindcss';

import {
  BUTTON_BG,
  BUTTON_COLORS,
  TEXT_BUTTON_BG,
  TEXT_BUTTON_COLORS,
} from './constants/button';
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
import {
  TypographyColors,
  TypographyFontSize,
  TypographyFontWeight,
  TypographyLineHeight,
} from './constants/typography';

export const simplifyUtilitiesPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        ...COLORS,
        ...TypographyColors,
        ...TEXT_BUTTON_COLORS,
        ...BUTTON_COLORS,
        ...ToggleColors,
        ...ToggleColors,
      },
      backgroundColor: {
        ...TEXT_BUTTON_BG,
        ...CHECKBOX_BG,
        ...BUTTON_BG,
      },
      stroke: {
        ...CHECKBOX_STROKE,
      },
      borderColor: {
        ...CHECKBOX_BORDER,
      },
      outlineColor: {
        ...CHECKBOX_OUTLINE,
        ...TEXT_BUTTON_BG,
        ...BUTTON_BG,
      },
      fontFamily: {
        serif: '"Inter", sans-serif',
      },
      width: { ...CHECKBOX_WIDTH, ...ToggleWidth },
      height: { ...CHECKBOX_HEIGHT, ...ToggleHeight },
      fontSize: {
        ...TypographyFontSize,
        ...InputFontSize,
      },
      lineHeight: {
        ...TypographyLineHeight,
      },
      fontWeight: {
        ...TypographyFontWeight,
      },
      margin: { ...InputMargin, ...ToggleMargin },
    },
  },
};
