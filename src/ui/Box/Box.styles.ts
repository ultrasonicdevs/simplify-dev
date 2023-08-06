import { cva } from 'class-variance-authority'
import { cn } from 'lib'

export const boxVariants = cva('', {
  variants: {
    padding: {
      none: cn('p-0'),
      sm: cn('p-box-low'),
      md: cn('p-box-medium'),
      lg: cn('p-box-large'),
    },
    rounded: {
      none: cn('rounded-0'),
      sm: cn('rounded-box-small-radius'),
      md: cn('rounded-box-medium-radius'),
      lg: cn('rounded-box-main-radius'),
    },
  },
  defaultVariants: {
    padding: 'none',
    rounded: 'none',
  },
})
