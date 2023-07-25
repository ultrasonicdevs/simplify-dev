import {
  TypographyFontWeight,
  TypographyLineHeight,
  TypographyFontSize,
  TypographyColors,
} from './src/ui/Typography/Typography.config'
import {
  TextButtonBackgroundColors,
  ButtonBackgroundColors,
  TextButtonColors,
  ButtonColors,
} from './src/ui/Button/Button.config'
import {
  CheckboxBgImage,
  CheckboxColors,
  CheckboxHeight,
  CheckboxWidth,
} from './src/ui/Checkbox/Checkbox.config'
import {
  ToggleHeight,
  ToggleColors,
  ToggleWidth,
  ToggleMargin,
} from './src/ui/Toggle/Toggle.config'
import { InputColors, InputMargin, InputFontSize } from './src/ui/Input/Input.config'
import { BoxPadding, BoxRadius } from './src/ui/Box/Box.config'

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './stories/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      width: {
        ...CheckboxWidth,
        ...ToggleWidth,
      },
      height: {
        ...CheckboxHeight,
        ...ToggleHeight,
      },
      backgroundImage: {
        ...CheckboxBgImage,
      },
      fontFamily: {
        serif: '"Inter", sans-serif',
      },
      borderRadius: {
        ...BoxRadius,
      },
      padding: {
        ...BoxPadding,
      },
      colors: {
        //components tw constants
        ...TextButtonBackgroundColors,
        ...ButtonBackgroundColors,
        ...TypographyColors,
        ...TextButtonColors,
        ...CheckboxColors,
        ...ButtonColors,
        ...ToggleColors,
        ...ButtonColors,
        ...ToggleColors,
        ...InputColors,
      },
      fontSize: {
        //components tw constants
        ...TypographyFontSize,
        ...InputFontSize,
      },
      lineHeight: {
        //components tw constants
        ...TypographyLineHeight,
      },
      fontWeight: {
        //components tw constants
        ...TypographyFontWeight,
      },
      margin: {
        ...InputMargin,
        ...ToggleMargin,
      },
    },
  },
  plugins: [],
}
