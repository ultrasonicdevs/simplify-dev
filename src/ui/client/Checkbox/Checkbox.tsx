import { checkboxToggleVariants, checkboxVariants } from './Checkbox.styles';
import useCheckbox from '../../../hooks/useCheckbox/useCheckbox';
import defaultCheckedIcon from './assets/checked.svg';
import { CheckboxProps } from './Checkbox.types';
import React, { forwardRef } from 'react';
import Box from 'ui/Box/Box';

const Checkbox = forwardRef<boolean, CheckboxProps>(
  (
    { disabled = false, className, state, onClick, checkedIcon, checkedClassName, rounded },
    ref
  ) => {
    const [checked, changeState] = useCheckbox(disabled, ref);

    return (
      <Box
        as='div'
        rounded={rounded || 'sm'}
        onClick={onClick || changeState}
        className={checkboxVariants({ disabled, className })}>
        {
          <img
            src={checkedIcon || defaultCheckedIcon}
            alt=' '
            className={checkboxToggleVariants({
              checked: state || checked,
              disabled,
              className: checkedClassName
            })}
          />
        }
      </Box>
    );
  }
);

export default Checkbox;
