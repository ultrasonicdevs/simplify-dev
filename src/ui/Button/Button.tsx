import { buttonVariants, textButtonVariants } from './Button.styles';
import Polymorph from '../Polymorph/Polymorph';
import { ButtonProps } from './Button.types';
import { FC } from 'react';
import { cn } from 'utils';

const Button: FC<ButtonProps> = ({
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

export default Button;
