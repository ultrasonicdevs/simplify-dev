import { Box } from '@ui/Box';
import { FC } from 'react';
import { toggleHandleVariants, toggleVariants } from './styles';

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
  handleClassName
}) => {
  const onClick = () => !disabled && changeState?.();

  return (
    <Box className={toggleVariants(disabled)({ checked: toggle, className })} onClick={onClick}>
      <Box
        className={toggleHandleVariants(disabled)({ checked: toggle, className: handleClassName })}
      />
    </Box>
  );
};
