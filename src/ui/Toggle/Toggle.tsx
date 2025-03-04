import { FC } from 'react';

import { Box } from '@ui/Box';

import { toggleHandleVariants, toggleVariants } from './Toggle.styles';

export type ToggleProps = {
  toggle: boolean;
  changeState?: () => void;
  handleClassName?: string;
  className?: string;
  disabled?: boolean;
};

export const Toggle: FC<ToggleProps> = ({
  toggle = false,
  changeState,
  disabled = false,
  className,
  handleClassName,
}) => {
  const onClick = () => !disabled && changeState?.();

  return (
    <Box
      role="button"
      className={toggleVariants(disabled)({ checked: toggle, className })}
      onClick={onClick}>
      <Box
        role="checkbox"
        className={toggleHandleVariants(disabled)({
          checked: toggle,
          className: handleClassName,
        })}
      />
    </Box>
  );
};
