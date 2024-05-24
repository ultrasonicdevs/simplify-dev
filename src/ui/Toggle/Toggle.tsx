import { useToggle } from '@hooks/useToggle';
import { Box } from '@ui/Box';
import { Dispatch, SetStateAction, forwardRef, useEffect } from 'react';
import { toggleHandleVariants, toggleVariants } from './styles';

export type ToggleProps = {
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;

  handleClassName?: string;
  className?: string;
  disabled?: boolean;
};

export const Toggle = forwardRef<boolean, ToggleProps>(
  ({ state = false, setState, disabled = false, className, handleClassName }, ref) => {
    
    const [checked, toggle] = useToggle(state);

    useEffect(() => {
      setState?.(checked);
    }, [checked])

    return (
      <Box className={toggleVariants(disabled)({ checked, className })} onClick={toggle}>
        <Box className={toggleHandleVariants(disabled)({ checked, className: handleClassName })} />
      </Box>
    );
  }
);
