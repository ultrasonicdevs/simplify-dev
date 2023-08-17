import {
  TypographyColors,
  TypographyFontSize,
  TypographyLineHeight,
  TypographyFontWeight
} from './config/Typography.config';
import {
  TextButtonBackgroundColors,
  ButtonBackgroundColors,
  TextButtonColors,
  ButtonColors
} from './config/Button.config';
import { ToggleWidth, ToggleHeight, ToggleColors, ToggleMargin } from './config/Toggle.config';
import { CheckboxWidth, CheckboxHeight, CheckboxColors } from './config/Checkbox.config';
import { InputFontSize, InputMargin } from './config/Input.config';
import { BoxRadius, BoxPadding } from './config/Box.config';
/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      colors: {
        ...TextButtonBackgroundColors,
        ...ButtonBackgroundColors,
        ...TypographyColors,
        ...TextButtonColors,
        ...CheckboxColors,
        ...ButtonColors,
        ...ToggleColors,
        ...ButtonColors,
        ...ToggleColors,
        transparent: '#00000000'
      },
      fontFamily: {
        serif: '"Inter", sans-serif'
      },
      width: { ...CheckboxWidth, ...ToggleWidth },
      height: { ...CheckboxHeight, ...ToggleHeight },
      fontSize: {
        ...TypographyFontSize,
        ...InputFontSize
      },
      lineHeight: {
        ...TypographyLineHeight
      },
      fontWeight: {
        ...TypographyFontWeight
      },
      margin: { ...InputMargin, ...ToggleMargin },
      borderRadius: { ...BoxRadius },
      padding: { ...BoxPadding },
      outline: {
        '0': '0px'
      }
    }
  }
};
