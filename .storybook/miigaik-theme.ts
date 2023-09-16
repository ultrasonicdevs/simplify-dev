import { create } from '@storybook/theming/create';
import icon from './miigaik-ui-ico.svg';

export default create({
  brandTitle: 'miigaik-ui',
  brandImage: icon,
  base: 'dark',

  fontBase: '"Inter", sans-serif',

  //
  colorPrimary: '#5585FF',
  colorSecondary: '#9A9A9A',
  textMutedColor: '#8A8A8A',

  buttonBg: '#E0E0E0',

  // UI
  appBorderColor: '#8A8A8A',
  appContentBg: '#ffffff',
  appBorderRadius: 0,
  appBg: '#F5F5F5',

  // Text colors
  textInverseColor: '#666666',
  textColor: '#666666',

  // Toolbar default and active colors
  barSelectedColor: '#666666',
  barTextColor: '#666666',
  barBg: '#000',

  // Form colors
  inputTextColor: '#666666',
  inputBorder: '#BBBBBB',
  inputBorderRadius: 2,
  inputBg: '#E0E0E0'
});
