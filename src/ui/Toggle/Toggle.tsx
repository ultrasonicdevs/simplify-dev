import { useToggle } from '@hooks/useToggle';
import { Box } from '@ui/Box';
import { forwardRef } from 'react';
import { toggleHandleVariants, toggleVariants } from './styles';

export type ToggleProps = {
  handleClassName?: string;
  className?: string;
  disabled?: boolean;
};

export const Toggle = forwardRef<boolean, ToggleProps>(
  ({ disabled = false, className, handleClassName }, ref) => {
    const [checked, changeState] = useToggle(disabled, ref);

    return (
      <Box className={toggleVariants(disabled)({ checked, className })} onClick={changeState}>
        <Box className={toggleHandleVariants(disabled)({ checked, className: handleClassName })} />
      </Box>
    );
  }
);
