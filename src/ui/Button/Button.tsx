import { buttonVariants, textButtonVariants } from './Button.styles'
import Polymorph, { PolymorphProps } from '../Polymorph/Polymorph'
import { forwardRef } from 'react'
import { cn } from 'lib'

enum buttonAsVariants {
  button,
  a,
}

export type ButtonProps = PolymorphProps<keyof typeof buttonAsVariants> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'reject'
  size?: 'xs' | 'sm' | 'md'
  invertedOnHover?: boolean
  buttonType?: 'button' | 'text'
}
const Button = forwardRef<HTMLButtonElement | HTMLElement, ButtonProps>(
  (
    {
      invertedOnHover = false,
      buttonType = 'button',
      className,
      children,
      variant,
      size,
      as = 'button',
      ...props
    },
    ref,
  ) => {
    return (
      <Polymorph
        as={as}
        ref={ref}
        className={cn(
          {
            button: buttonVariants(invertedOnHover)({ variant, size, className }),
            link: buttonVariants(invertedOnHover)({ variant, size, className }),
            text: textButtonVariants({ variant, size, className }),
          }[buttonType],
        )}
        {...props}>
        {children}
      </Polymorph>
    )
  },
)

export default Button
