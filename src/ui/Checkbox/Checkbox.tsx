import { useToggle } from '@hooks/useToggle';
import { Box } from '@ui/Box';
import { forwardRef } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { checkboxToggleVariants, checkboxVariants } from './Checkbox.styles';

export interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  checkedIcon?: string;
  isError?: boolean;
}

export const Checkbox = forwardRef<boolean, CheckboxProps>(
  ({ disabled = false, className, isError }, ref) => {
    const [checked, changeState] = useToggle(disabled, ref);

    const variant = isError ? 'error' : 'default';

    return (
      <Box
        as='div'
        onClick={changeState}
        className={checkboxVariants(disabled, checked)({ variant, className })}>
        {
          <IoCheckmark
            className={checkboxToggleVariants({
              checked,
              disabled
            })}
          />
        }
      </Box>
    );
  }
);
