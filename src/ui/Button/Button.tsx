import { Polymorph } from '@ui/Polymorph';

import { buttonVariants } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({
  buttonType = 'button',
  className,
  children,
  variant,
  size,
  as = 'button',
  ...props
}: ButtonProps) => {
  return (
    <Polymorph
      as={as}
      className={buttonVariants({ variant, size, buttonType, className })}
      {...props}>
      {children}
    </Polymorph>
  );
};
