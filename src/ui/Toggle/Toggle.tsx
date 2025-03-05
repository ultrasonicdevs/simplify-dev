import { FC } from 'react';

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
    <div
      role="toggle"
      className={toggleVariants(disabled)({ checked: toggle, className })}
      onClick={onClick}>
      <div
        role="toggle-checker"
        className={toggleHandleVariants(disabled)({
          checked: toggle,
          className: handleClassName,
        })}
      />
    </div>
  );
};
