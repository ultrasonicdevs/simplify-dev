import { FC } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { checkboxToggleVariants, checkboxVariants } from './Checkbox.styles';

export interface CheckboxProps {
  toggle: boolean;
  changeState?: () => void;
  className?: string;
  disabled?: boolean;
  checkedIcon?: string;
  isError?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  toggle = false,
  changeState,
  disabled = false,
  className,
  isError
}) => {
  const variant = isError ? 'error' : 'default';

  const onClick = () => !disabled && changeState?.();

  return (
    <div
      role='checkbox'
      onClick={onClick}
      className={checkboxVariants(disabled, toggle)({ variant, className })}>
      <IoCheckmark
        role='checkbox-checker'
        className={checkboxToggleVariants({
          checked: toggle,
          disabled
        })}
      />
    </div>
  );
};
