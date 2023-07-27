import {
  TypographyColors,
  TypographyFontSize,
  TypographyLineHeight,
  TypographyFontWeight,
} from './config/Typography.config'
import {
  TextButtonBackgroundColors,
  ButtonBackgroundColors,
  TextButtonColors,
  ButtonColors,
} from './config/Button.config'
import {
  CheckboxWidth,
  CheckboxHeight,
  CheckboxBgImage,
  CheckboxColors,
} from './config/Checkbox.config'
import { ToggleWidth, ToggleHeight, ToggleColors, ToggleMargin } from './config/Toggle.config'
import { InputFontSize, InputMargin } from './config/Input.config'
import { BoxRadius, BoxPadding } from './config/Box.config'

const colors = {
  ...TextButtonBackgroundColors,
  ...ButtonBackgroundColors,
  ...TypographyColors,
  ...TextButtonColors,
  ...CheckboxColors,
  ...ButtonColors,
  ...ToggleColors,
  ...ButtonColors,
  ...ToggleColors,
  transparent: '#00000000',
}
const width = { ...CheckboxWidth, ...ToggleWidth }
const height = { ...CheckboxHeight, ...ToggleHeight }
const backgroundImage = { ...CheckboxBgImage }
const fontSize = { ...TypographyFontSize, ...InputFontSize }
const lineHeight = { ...TypographyLineHeight }
const fontWeight = { ...TypographyFontWeight }
const margin = { ...InputMargin, ...ToggleMargin }
const borderRadius = { ...BoxRadius }
const padding = { ...BoxPadding }

/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        serif: '"Inter", sans-serif',
      },
      width: {
        ...width,
      },
      height: {
        ...height,
      },
      backgroundImage: {
        ...backgroundImage,
      },
      fontSize: {
        ...fontSize,
      },
      lineHeight: {
        ...lineHeight,
      },
      fontWeight: {
        ...fontWeight,
      },
      margin: {
        ...margin,
      },
      borderRadius: {
        ...borderRadius,
      },
      padding: {
        ...padding,
      },
    },
  },
}
