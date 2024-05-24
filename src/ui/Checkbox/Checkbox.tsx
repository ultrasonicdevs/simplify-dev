import { useToggle } from '@hooks/useToggle';
import { Box } from '@ui/Box';
import { Dispatch, SetStateAction, forwardRef, useEffect } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { checkboxToggleVariants, checkboxVariants } from './Checkbox.styles';

export interface CheckboxProps {
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;

  className?: string;
  disabled?: boolean;
  checkedIcon?: string;
  isError?: boolean;
}

export const Checkbox = forwardRef<boolean, CheckboxProps>(
  ({ state = false, setState, disabled = false, className, isError }, ref) => {
    const [checked, toggle] = useToggle(state);

    useEffect(() => {
      setState?.(checked);
    }, [checked])

    const variant = isError ? 'error' : 'default';

    return (
      <Box
      as='div'
      onClick={toggle}
      className={checkboxVariants(disabled, checked)({ variant, className })}
        >
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
