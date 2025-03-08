import { COLORS } from './colors';

export const CHECKBOX_STROKE = {
  cb: COLORS['blue-50'],
  'cb-disabled': COLORS['blue-50'],
};

export const CHECKBOX_OUTLINE = {
  cb: COLORS['blue-500'],
  'cb-disabled': COLORS['blue-500'],
};

export const CHECKBOX_BORDER = {
  cb: COLORS['grey-300'],
  'cb-checked': COLORS.transparent,

  'cb-hover': COLORS['blue-300'],
  'cb-hover-checked': COLORS.transparent,

  'cb-active': COLORS['grey-300'],
  'cb-active-checked': COLORS['blue-300'],

  'cb-focus': COLORS['blue-500'],
  'cb-focus-checked': COLORS['blue-300'],

  'cb-disabled': COLORS['grey-200'],
  'cb-disabled-checked': COLORS.transparent,
};

export const CHECKBOX_BG = {
  cb: COLORS.transparent,
  'cb-checked': COLORS['blue-500'],

  'cb-hover': COLORS.transparent,
  'cb-hover-checked': COLORS['blue-700'],

  'cb-active': COLORS.transparent,
  'cb-active-checked': COLORS['blue-300'],

  'cb-focus': COLORS.transparent,
  'cb-focus-checked': COLORS['blue-500'],

  'cb-disabled': COLORS['grey-50'],
  'cb-disabled-checked': COLORS['blue-300'],
};

export const CHECKBOX_WIDTH = {
  cb: '24px',
};
export const CHECKBOX_HEIGHT = {
  cb: '24px',
};
