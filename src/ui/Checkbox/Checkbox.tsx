import { useId } from 'react';
import { IoCheckmark } from 'react-icons/io5';

import { PolymorphProps } from '@ui/Polymorph';

import { checkboxVariants } from './Checkbox.styles';

export type CheckboxProps = {
  isError?: boolean;
  label?: string;
} & Omit<PolymorphProps<'input'>, 'type'>;

export const Checkbox = ({
  className,
  checked,
  isError = false,
  disabled = false,
  label,
  ...props
}: CheckboxProps) => {
  const id = useId();
  const {
    base,
    input,
    box,
    icon,
    label: labelStyle,
  } = checkboxVariants({ isError });

  return (
    <label
      htmlFor={id}
      className={base({ className })}
      aria-disabled={disabled}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className={input()}
        {...props}
      />
      <div className={box()}>
        <IoCheckmark className={icon()} />
      </div>
      {label && <span className={labelStyle()}>{label}</span>}
    </label>
  );
};
