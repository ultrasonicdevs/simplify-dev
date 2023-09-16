enum RoundedVariants {
  none,
  sm,
  md,
  lg
}

export interface ToggleProps {
  rounded?: keyof typeof RoundedVariants;
  handleClassName?: string;
  className?: string;
  disabled?: boolean;
}
