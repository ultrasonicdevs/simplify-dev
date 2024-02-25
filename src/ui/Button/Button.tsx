import { Polymorph } from '@ui/Polymorph';
import { cn } from '@utils';
import { FC } from 'react';
import { buttonVariants, textButtonVariants } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({
  buttonType = 'button',
  className,
  children,
  variant,
  size,
  as = 'button',
  ...props
}) => {
  return (
    <Polymorph
      as={as}
      className={cn(
        {
          button: buttonVariants({ variant, size, className }),
          link: buttonVariants({ variant, size, className }),
          text: textButtonVariants({ variant, size, className })
        }[buttonType]
      )}
      {...props}>
      {children}
    </Polymorph>
  );
};
