import { toggleHandleVariants, toggleVariants } from './Toggle.styles';
import useCheckbox from '../../../hooks/useCheckbox/useCheckbox';
import { ToggleProps } from './Toggle.types';
import { forwardRef } from 'react';
import Box from 'ui/Box/Box';

const Toggle = forwardRef<boolean, ToggleProps>(
  ({ disabled = false, className, handleClassName, rounded }, ref) => {
    const [checked, changeState] = useCheckbox(disabled, ref);

    return (
      <Box
        rounded={rounded || 'lg'}
        className={toggleVariants(disabled)({ checked, className })}
        onClick={changeState}>
        <Box
          rounded={rounded || 'lg'}
          className={toggleHandleVariants(disabled)({ checked, className: handleClassName })}
        />
      </Box>
    );
  }
);

export default Toggle;
