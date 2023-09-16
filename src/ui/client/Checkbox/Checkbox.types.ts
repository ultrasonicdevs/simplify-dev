import { MouseEventHandler } from 'react';

enum RoundedVariants {
  none,
  sm,
  md,
  lg
}

export interface CheckboxProps {
  rounded?: keyof typeof RoundedVariants;
  checkedClassName?: string;
  className?: string;
  disabled?: boolean;
  checkedIcon?: string;
  state?: boolean;
  onClick?: MouseEventHandler;
}
