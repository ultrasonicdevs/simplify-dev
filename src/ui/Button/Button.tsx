import { buttonVariants, textButtonVariants } from './Button.styles';
import Polymorph, { PolymorphProps } from '../Polymorph/Polymorph';
import { FC } from 'react';
import { cn } from 'lib';

enum buttonAsVariants {
  button,
  a
}

export type ButtonProps = PolymorphProps<keyof typeof buttonAsVariants> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'reject';
  size?: 'xs' | 'sm' | 'md';
  invertedOnHover?: boolean;
  buttonType?: 'button' | 'text';
};
const Button: FC<ButtonProps> = ({
  invertedOnHover = false,
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
          button: buttonVariants(invertedOnHover)({ variant, size, className }),
          link: buttonVariants(invertedOnHover)({ variant, size, className }),
          text: textButtonVariants({ variant, size, className })
        }[buttonType]
      )}
      {...props}>
      {children}
    </Polymorph>
  );
};

export default Button;
